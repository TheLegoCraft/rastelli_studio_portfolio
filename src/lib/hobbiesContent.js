// Sections of the Hobbies page, in display order.

const CYCLING = '/projects/2026_Cycling';
const PERSONAL = '/projects/Ongoing_PersonalWork';

export const hobbiesIntro =
  'My hobbies involve a variety of things, ranging from backpacking, to film photography, to my love for waterpolo, and even cooking. The pictures on this page are here to show a less professional side of me.';

export const hobbiesSections = [
  {
    title: 'Backpacking / Iceland',
    brief: [
      'After graduating from university, I took on the challenge of cycling across first Iceland and then Europe by myself. Both were amazing experiences, offering a mix of stunning views, challenging landscapes, rough roads, and amazing people.',
      'Crossing the Icelandic highlands proved to be one of the hardest things I’ve ever done, battling days of rain cycling across volcanic ash, fording glacial rivers and constantly fighting the wind; however, the struggle made the views even more worth it.',
    ],
    photobooth: [
      [
        { src: `${CYCLING}/image_1.jpeg`, alt: 'Loaded touring bike in the Icelandic highlands', span: '1fr', aspectRatio: '3/2' },
      ],
      [
        { src: `${CYCLING}/image_2.jpeg`, alt: 'Snow-capped peak beside a coastal road', span: '1fr', aspectRatio: '1' },
        { src: `${CYCLING}/image_3.jpeg`, alt: 'Gravel track across the highlands', span: '2fr', aspectRatio: '3/2' },
      ],
      [
        { src: `${CYCLING}/image_4.jpeg`, alt: 'Volcanic ash road under a grey sky', span: '2fr', aspectRatio: '3/2' },
        { src: `${CYCLING}/image_5.jpeg`, alt: 'Red volcanic ground and green hills', span: '1fr', aspectRatio: '1' },
      ],
      [
        { src: `${CYCLING}/image_6.jpeg`, alt: 'Glacial river beside a black gravel track', span: '1fr', aspectRatio: '3/2' },
      ],
      [
        { src: `${CYCLING}/image_7.jpeg`, alt: 'Green lava field and distant mountains', span: '1fr' },
        { src: `${CYCLING}/image_8.jpeg`, alt: 'Dirt road through a rocky plain', span: '1fr' },
        { src: `${CYCLING}/image_9.jpeg`, alt: 'Touring bike on a bridge over a river', span: '1fr' },
      ],
    ],
  },
  {
    title: 'Backpacking / Europe',
    brief: [
      'While Europe was much easier, it was still introspective in its own way (having cycled from Trieste to Berlin passing by Ljubljana, Vienna, Brno and Wroclaw), offering such a wide and interesting variety of cultures and food that will stay with me for the rest of my life.',
    ],
    photobooth: [
      [
        { src: `${PERSONAL}/image_12.jpeg`, alt: 'Island church on Lake Bled', span: '1fr', aspectRatio: '3/4' },
        { src: `${PERSONAL}/image_13.JPG`, alt: 'Repairing a broken spoke at the roadside', span: '1fr', aspectRatio: '3/4' },
        { src: `${PERSONAL}/image_14.JPG`, alt: 'Cycle path through a cornfield', span: '1fr', aspectRatio: '3/4' },
      ],
      [
        { src: `${PERSONAL}/image_16.jpeg`, alt: 'Forested valley under dramatic clouds', span: '1fr', aspectRatio: '4/3' },
      ],
      [
        { src: `${PERSONAL}/image_15.jpeg`, alt: 'Framed portrait of a bearded man in red', span: '1fr', aspectRatio: '3/4' },
        { src: `${PERSONAL}/image_17.jpeg`, alt: 'Camp stove and gear on a picnic table under a shelter', span: '1fr', aspectRatio: '3/4' },
        { src: `${PERSONAL}/image_18.jpeg`, alt: 'Currywurst and chips in a restaurant', span: '1fr', aspectRatio: '3/4' },
      ],
    ],
  },
  {
    title: 'Film Photography',
    brief: [],
    photobooth: [
      [
        { src: `${PERSONAL}/image_1.JPG`, alt: 'Green hill under a cloudy sky', span: '1fr', aspectRatio: '2/3' },
        { src: `${PERSONAL}/image_2.JPG`, alt: 'Bridge walkway towards a cathedral', span: '1fr', aspectRatio: '2/3' },
        { src: `${PERSONAL}/image_3.JPG`, alt: 'Modernist tower blocks', span: '1fr', aspectRatio: '2/3' },
      ],
      [
        { src: `${PERSONAL}/image_4.JPG`, alt: 'Autumn leaves on a woodland path', span: '1fr', aspectRatio: '1' },
        { src: `${PERSONAL}/image_5.JPG`, alt: 'Black and white photo of a sculpture against the sky', span: '1fr', aspectRatio: '1' },
      ],
    ],
  },
  {
    title: 'Waterpolo',
    brief: [
      'Waterpolo is a team sport I’ve been involved in since I began university. I have been fortunate enough to play for different clubs in both the UK and Germany, which has been a fantastic way to experience different cultures and skill levels.'
    ],
    photobooth: [
      [
        { src: `${PERSONAL}/image_6.jpg`, alt: 'Waterpolo team celebrating in the pool', span: '1fr', aspectRatio: '3/2' },
      ],
    ],
  },
  {
    title: 'Cooking',
    brief: [],
    photobooth: [
      [
        { src: `${PERSONAL}/image_7.jpeg`, alt: 'Fish with roasted potatoes and dill', span: '3fr', aspectRatio: '1' },
        { src: `${PERSONAL}/image_10.jpeg`, alt: 'Focaccia sandwiches on a board', span: '4fr', aspectRatio: '4/3' },
      ],
      [
        { src: `${PERSONAL}/image_8.jpeg`, alt: 'Seafood spaghetti', span: '1fr', aspectRatio: '3/4' },
        { src: `${PERSONAL}/image_9.jpeg`, alt: 'Beef noodle soup with soft-boiled egg', span: '1fr', aspectRatio: '3/4' },
        { src: `${PERSONAL}/image_11.jpeg`, alt: 'Spaghetti topped with lobster tail', span: '1fr', aspectRatio: '3/4' },
      ],
    ],
  },
];
