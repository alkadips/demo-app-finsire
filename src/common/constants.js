export const PRECISION = 6;
export const REGEX_GET_NONDIGITS = /[^\d]/gi;
export const ASCII_ENTER_KEY = 13;
export const ROUNDED_BTN_TYPE = 'default';

export const DASHBOARD_TITLE = 'ReactJS Problem Set';
export const DATASET_BASELINE_URL = '/api/v1.0/data';
export const DATA1234_URL = '/api/v1.0/data1234';
export const DATA4321_URL = '/api/v1.0/data4321';

export const DATASET_1 = {
  url: DATA1234_URL,
  buttonText: 'Reload JSON-1234 Data',
  onClickArg: 1234,
};

export const DATASET_2 = {
  url: DATA4321_URL,
  buttonText: 'Reload JSON-4321 Data',
  onClickArg: 4321,
};

export const DATASETS = [DATASET_1, DATASET_2];

export const TILE_VALUE_MEAN_ID = 'tile-value-Mean';
export const TILE_VALUE_MEDIAN_ID = 'tile-value-Median';
export const TILE_VALUE_STDDEV_ID = 'tile-value-Std Deviation';
export const TILE_VALUE_MODE_ID = 'tile-value-Mode';
