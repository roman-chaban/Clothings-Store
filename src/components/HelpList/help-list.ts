export interface ListItems {
  listTitle: string;
  listSubitems: {
    firstSubTitle: string;
    secondSubTitle: string;
  }[];
}

export const helpList: ListItems[] = [
  {
    listTitle: '1. Ordering Process',
    listSubitems: [
      {
        firstSubTitle:
          'How to Place an Order: Browse our collections, select your desired items, choose the size and color, and add them to your cart. When you’re ready, proceed to checkout and follow the prompts to complete your purchase.',
        secondSubTitle:
          "Order Confirmation: After placing your order, you'll receive a confirmation email with your order details. If you don't receive it, please check your spam folder or contact us.",
      },
    ],
  },
  {
    listTitle: '2. Shopping Information',
    listSubitems: [
      {
        firstSubTitle:
          'Delivery Options: We offer standard and express shipping options. Shipping times and costs vary depending on your location.',
        secondSubTitle:
          "Tracking Your Order: Once your order is shipped, you'll receive a tracking number via email. Use this number on our website to track your order status.",
      },
    ],
  },
  {
    listTitle: '3. Returns and Exchanges',
    listSubitems: [
      {
        firstSubTitle:
          "Return Policy: If you're not satisfied with your purchase, you can return it within 30 days of receipt for a full refund or exchange. Items must be unworn, unwashed, and in their original condition.",
        secondSubTitle:
          "How to Return an Item: Fill out the return form included in your package, pack the items securely, and send them back using the provided return label. For exchanges, specify the new size or color you'd like.",
      },
    ],
  },
  {
    listTitle: '4. Payment Options',
    listSubitems: [
      {
        firstSubTitle:
          'Accepted Payment Methods: We accept major credit cards, PayPal, and other secure payment methods.',
        secondSubTitle:
          'Payment Issues: If you encounter any problems during checkout, ensure your billing information matches your payment method. Contact us if the issue persists.',
      },
    ],
  },
  {
    listTitle: '5. Account Management',
    listSubitems: [
      {
        firstSubTitle:
          'Creating an Account: Sign up for an account to save your information for faster checkout, track your orders, and receive exclusive offers.',
        secondSubTitle:
          "Forgot Password: Click on the 'Forgot Password' link on the login page, enter your email address, and follow the instructions to reset your password.",
      },
    ],
  },
  {
    listTitle: '6. Size Guide',
    listSubitems: [
      {
        firstSubTitle:
          'Finding Your Size: Refer to our size guide available on each product page to find the best fit for you. If you need further assistance, contact our customer support.',
        secondSubTitle: '',
      },
    ],
  },
  {
    listTitle: '7. Contact Us',
    listSubitems: [
      {
        firstSubTitle:
          'Customer Support: Reach out to us via email at support@clothingstore.com or call us at (123) 456-7890. Our team is available Monday to Friday, 9 AM to 5 PM (EST).',
        secondSubTitle: '',
      },
    ],
  },
];
