const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/new-threads-clothing.appspot.com/o/joe-ciciarelli-FwVnAY_xMaY-unsplash.png?alt=media&token=6259bd2b-dec6-497d-89be-ca1ed5fb1529',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/new-threads-clothing.appspot.com/o/markus-spiske-jddw6iA31sE-unsplash.jpg?alt=media&token=633b2e73-109d-4772-afec-1017e9ddbeb4',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/new-threads-clothing.appspot.com/o/kristopher-patterson-_UnDOhOumqA-unsplash.jpg?alt=media&token=fe0105cb-bccd-453a-b8e9-2871182c36fc',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/new-threads-clothing.appspot.com/o/adam-winger-Xt4g9VbMljE-unsplash.jpg?alt=media&token=266b7857-e805-460f-a7af-119cd5611424',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/new-threads-clothing.appspot.com/o/sincerely-media-_iIB6g19mq4-unsplash.jpg?alt=media&token=86eeacb8-4eac-4344-9bb2-cac20cf8fc16',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
