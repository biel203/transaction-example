import { FormTypes } from 'pages/Transaction/contracts'

export type FetchRequest = {
  method: string;
  params?: 'any object';
  headers?: 'any object';
  body?: FormTypes;
  showJSON?: boolean;
  showConsoleLog?: boolean;
  title: string;
}
