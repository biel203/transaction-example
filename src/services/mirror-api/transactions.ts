import { callApiBase } from './base';

import { formatToInt } from 'utils/formatToCurrency'

import { FormTypes } from 'pages/Transaction/contracts'


const endpoint = "transactions"

const transactionService = {
  getTransactions: () =>
    callApiBase(endpoint, {
      title: 'getTransaction - Get Transactions',
      method: 'GET',
    }),

    sendTransactions: (formValue: FormTypes) => {

      const body = {
        ...formValue,
        amount: formatToInt(formValue.amount!),
        buyer_document: formValue.buyer_document!.replaceAll(/\.|-/g, ''),
        credit_card_number: formValue.credit_card_number!.replaceAll(' ', '')
      }

      return callApiBase(endpoint, {
        title: 'sendTransaction - Send Transactions',
        method: 'POST',
        body,
        showJSON: true,
      })
    }
};

export default transactionService;
