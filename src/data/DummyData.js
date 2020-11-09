import DashboardWalletOptions from '../models/DashboardWalletOptions';
import { Electricity_Board1, Electricity_Board2, Movicel, Unitel } from '../assets';

export const walletOptions = [
  new DashboardWalletOptions('A1', 'Pay Money'),
  new DashboardWalletOptions('A2', 'Add Money'),
  new DashboardWalletOptions('A3', 'Bank Transfer'),
  new DashboardWalletOptions('A4', 'Passbook'),
];

export const RecentRechargesData = [
  {
    id: 1,
    name: 'Andrew Garfell',
    imageName: 'Movicel',
    mobileNumber: '894514251',
    amount: '3,500 Kz',
  },
  {
    id: 2,
    name: 'Felip Harley',
    imageName: 'Unitel',
    mobileNumber: '894512358',
    amount: '4,500 Kz',
  },
  
];



export const dthOperators = [
  {
    id: 1,
    name: 'ZapTV',
    imageName: 'ZapTV',
  },
  {
    id: 2,
    name: 'DirecTV',
    imageName: 'DirecTV',
  },
];

export const RecentDTHRechargesData = [
  {
    id: 1,
    name: '1144215228',
    operator: 'ZAP TV',
    imageName: 'ZapTV',
    details: 'Recharge of 4000 Kz done on 16 May, 2019',
    amount: '3,500 Kz',
  },
  
];

export const newData = [
  {
    id: 1,
    name: 'Andrew Garfell',
    initial: 'A',
    txnType: 'debit',
    txnDate: '23 June 2020',
    amount: '4,250 Kz',
    balance: '750. 00 Kz',
    txnDetails: 'contact',
  },
  {
    id: 2,
    name: 'Franko Anne',
    initial: 'F',
    txnType: 'credit',
    txnDate: '20 June 2020',
    amount: '1250 Kz',
    balance: '5000. 00 Kz',
    txnDetails: 'contact',
  },
  {
    id: 3,
    name: 'Andrew Garfell',
    initial: 'A',
    txnType: 'debit',
    txnDate: '16 June 2020',
    amount: '2,000 Kz',
    balance: '7000. 00 Kz',
    txnDetails: 'contact',
  },
  {
    id: 4,
    name: 'Brian Odian',
    initial: 'B',
    txnType: 'debit',
    txnDate: '11 June 2020',
    amount: '5000 Kz',
    balance: '9000. 00 Kz',
    txnDetails: 'contact',
  },
  {
    id: 5,
    name: 'Rechard Liv Telvin',
    initial: 'R',
    txnType: 'debit',
    txnDate: '10 June 2020',
    amount: '3,000 Kz',
    balance: '12,000. 00 Kz',
    txnDetails: 'contact',
  },
  {
    id: 6,
    name: 'Brianna Tarth',
    initial: 'B',
    txnType: 'debit',
    txnDate: '10 June 2020',
    amount: '500 Kz',
    balance: '12000. 00 Kz',
    txnDetails: 'contact',
  },
  {
    id: 7,
    name: 'Added To Wallet: BNA',
    initial: 'B',
    txnType: 'credit',
    txnDate: '08 June 2020',
    amount: '12,000 Kz',
    balance: '12500. 00 Kz',
    txnDetails: 'wallet',
  },
  {
    id: 8,
    name: 'David Cannes',
    initial: 'D',
    txnType: 'debit',
    txnDate: '05 June 2020',
    amount: '5,000 Kz',
    balance: '500. 00 Kz',
    txnDetails: 'contact',
    
  },

];

export const contactList = [
  {
    id: 1,
    name: 'Andrew Garfell',
    mobile: '894514251',
  },
  {
    id: 2,
    name: 'Addrian Lopp',
    mobile: '948513251',
  },
  {
    id: 3,
    name: 'Anne Franko',
    mobile: '894599251',
  },
  {
    id: 4,
    name: 'Brian Odian',
    mobile: '948558844',
  },
  {
    id: 5,
    name: 'Beck Liv Telvin',
    mobile: '894514221',
  },
  {
    id: 6,
    name: 'Brianna Tarth',
    mobile: '942324251',
  },
  {
    id: 7,
    name: 'Crish Donna',
    mobile: '894513211',
  },
  {
    id: 8,
    name: 'Derik Obrien',
    mobile: '890874251',
  },
  {
    id: 9,
    name: 'Dehun Karl',
    mobile: '898884251',
  },
];

export const amountList = [
  {
    id: 1,
    amount: '5,000 Kz',
    
  },
  {
    id: 2,
    amount: '10,000 Kz',
  },
  {
    id: 3,
    amount: '20,000 Kz',
  },
];

export const ElectricityBoardList = [
  {
    id: 1,
    name: "Empresa Nacional de Electricidade de Angola",
    image: Electricity_Board1,
  },
  {
    id: 2,
    name: "Empresa de Distribuicao Nacional de Electricidade",
    image: Electricity_Board2,
  }
];

export const ElectricityRecharges = [
  {
    id: 1,
    name: 'AG12012245',
    board: 'ENE',
    boardName: 'Empresa Nacional de Electricidade de Angola',
    image: Electricity_Board1,
    district: 'Luanda',
    amount: '2,500 Kz',
  }
];

export const WaterRecentsData = [
  {
  id : 1, 
  customerId: '10012012245',
  name: 'WSIDP',
  amount: '2,500 Kz' 
}
];

export const DataCardRecentsData = [
  {
    id: 1,
    name: 'Eric Mendenz',
    mobile: '887710210',
    amount: '3,000 Kz',
    image: Unitel,
  }
]; 

export const makeArtist_List = [
  {
    id: 1,
    name: "Lisa Kelly",
  },
  {
    id: 2,
    name: 'Adrianna Gonclova',
  },
  {
    id: 3,
    name: "Chris Dollas",
  },
  {
    id: 4,
    name: "Lisa Kelly",
  },
  {
    id: 5,
    name: 'Adrianna Gonclova',
  },
  {
    id: 6,
    name: "Chris Dollas",
  },
];

export const PromoCodesData = [
    {
        id: 1,
        name: 'FAM150',
        info: 'Flat 150 Kz off on shopping orders more than 2500 Kz',
        tnc:'T&C apply',
    },
    {
        id: 2,
        name: 'FAM440',
        info: 'Flat 400 Kz off on shopping orders more than 5000 Kz',
        tnc:'T&C apply',
    },
];

export const PaymentOptionsData = [
    {
        id: 1,
        name: 'Debit Card',
        isChecked: false,
    },
    {
        id: 2,
        name: 'Net Banking',
        isChecked: false,
    },
    
];

export const PlansData = {
  Popular: [
    {
      id: 1,
      planName: 'Plano antigo',
      cost: '2,500 Kz',
      info:
        'Dados 500 MB, Minutos Movicel-500,Outras Redes Naciaonais - 200, SMS - 400, MMS - 200 ',
    },
    {
      id: 2,
      planName: 'Plano novo',
      cost: '5,000 Kz',
      info:
        'Dados 1 GB, Minutos Movicel-350,Outras Redes Naciaonais - 225, SMS - 500, MMS - 25',
    },
    {
      id: 3,
      planName: 'Movinet medium',
      cost: '15,000 Kz',
      info:
        'Dados 15 GB, Minutos Movicel-350,Outras Redes Naciaonais - 225, SMS - 500, MMS - 25, Validity 30 Days',
    },
    {
      id: 4,
      planName: 'KAGRA Nice',
      cost: '18,00 Kz',
      info:
        'Dados 500 MB, Minutos Movicel-300, SMS - 300, MMS - 25, Validity 30 Days',
    },
  ],
  Data: [
    {
      id: 5,
      planName: 'Movinet medium',
      cost: '15,000 Kz',
      info:
        'Dados 15 GB, Minutos Movicel-350,Outras Redes Naciaonais - 225, SMS - 500, MMS - 25, Validity 30 Days',
    },
    {
      id: 6,
      planName: 'KAGRA Nice',
      cost: '18,00 Kz',
      info:
        'Dados 500 MB, Minutos Movicel-300, SMS - 300, MMS - 25, Validity 30 Days',
    },
  ],
};





export default {
  PlansData,
  walletOptions,
  RecentRechargesData,
  PromoCodesData,
  PaymentOptionsData,
  amountList, 
  RecentDTHRechargesData,
  contactList,
  
};
