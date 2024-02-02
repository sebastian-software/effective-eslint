import { ESLint, Linter } from "eslint";

process.env.ESLINT_USE_FLAT_CONFIG = "true";

async function getConfig(config: ESLint.ConfigData) {
  const linter = new ESLint({
    useEslintrc: false,
    baseConfig: config,
  });

  const cfg = (await linter.calculateConfigForFile(
    "index.ts"
  )) as ESLint.ConfigData;
  return cfg.rules ?? {};
}

const combined: Record<string, Record<string, unknown>> = {};

async function mergeConfig(
  cfg: Promise<Partial<Linter.RulesRecord>>,
  origin: string
) {
  for (const [rule, value] of Object.entries(await cfg)) {
    if (!combined[rule]) {
      combined[rule] = {};
    }

    combined[rule][origin] = value;
  }
}

async function loadConfigs() {
  await mergeConfig(
    getConfig({
      extends: ["eslint:recommended"],
    }),
    "eslint"
  );

  await mergeConfig(
    getConfig({
      extends: ["plugin:@typescript-eslint/recommended"],
    }),
    "ts"
  );

  await mergeConfig(
    getConfig({
      extends: ["plugin:@typescript-eslint/recommended-type-checked"],
    }),
    "ts-typed"
  );

  await mergeConfig(
    getConfig({
      extends: ["eslint-config-xo"],
    }),
    "xo"
  );

  await mergeConfig(
    getConfig({
      extends: ["eslint-config-xo-typescript"],
    }),
    "xo-ts"
  );

  await mergeConfig(
    getConfig({
      extends: ["eslint-config-prettier"],
    }),
    "prettier"
  );

  const keys = Object.keys(combined).sort();
  for (const key of keys) {
    console.log(key);
    for (const [origin, value] of Object.entries(combined[key])) {
      console.log(`  - ${origin}:`, value);
    }
  }
}

void loadConfigs();
