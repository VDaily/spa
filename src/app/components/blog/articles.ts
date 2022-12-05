export interface Article {
  id: number;
  name: string;
  alt: string;
  categoryName: string;
  type: string;
  date: string;
  timeSpent?: string | undefined;
  title: string;
  content: string;
}

export const blogArticlesArr: Article[] = [
  {
    id: 11,
    name: "article-img5.svg",
    alt: "Image minimalism",
    categoryName: "Marketing",
    type: "Podcast",
    date: "September 4, 2020",
    timeSpent: "36 min",
    title: "What is traffic arbitrage and does it really make money?",

    content:
      "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, cupiditate debitis ducimus facere illum in ipsam itaque molestiae nostrum placeat quasi quos recusandae, reiciendis sit, tempore unde. Laudantium, maiores?",
  },
  {
    id: 2,
    name: "article-img2.svg",
    alt: "Laptop picture",
    categoryName: "Development",
    type: "Article",
    date: "September 1, 2020",
    title: "How to choose the first programming language for a beginner",
    content:
      "Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestaslaoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas ",
  },
  {
    id: 3,
    name: "article-img3.svg",
    alt: "The guy with the big hat",
    categoryName: "Design",
    type: "Article",
    date: "August 8, 2020",
    title: "Should you choose a creative profession if you are attracted to creativity?",
    content: "Curabitur nisl tincidunt eros venenatis vestibulunisl tincidunt eros venenatis vestibulu",
  },
  {
    id: 12,
    name: "article-img4.svg",
    alt: "Image minimalism",
    categoryName: "HR & Recruting",
    type: "Article",
    date: "August 3, 2020",
    title: "HR statistics: job search,  interviews, hiring and recruiting",

    content:
      "Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium",
  },
  {
    id: 13,
    name: "article-img6.svg",
    alt: "Image minimalism",
    categoryName: "Management",
    type: "Podcast",
    date: "August 2, 2020",
    timeSpent: "45 min",
    title: "What to do and who to talk to if you want to get feedback on the product",

    content:
      "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis maiores?",
  },
  {
    id: 1,
    name: "article-img1.svg",
    alt: "Image minimalism",
    categoryName: "Design",
    type: "Podcast",
    date: "August 3, 2020",
    timeSpent: "36 min",
    title: "What are color profiles and how they work in graphic design",

    content:
      "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, cupiditate debitis ducimus facere illum in ipsam itaque molestiae nostrum placeat quasi quos recusandae, reiciendis sit, tempore unde. Laudantium, maiores?",
  },
  {
    id: 14,
    name: "article-img7.svg",
    alt: "Image minimalism",
    categoryName: "Management",
    type: "Video",
    date: "July 15, 2020",
    timeSpent: "45 min",
    title: "Startup: how to build a team that will live longer than a year",

    content: "Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna maiores?",
  },
  {
    id: 15,
    name: "article-img8.svg",
    alt: "Image minimalism",
    categoryName: "Marketing",
    type: "Article",
    date: "July 9, 2020",
    title: "Startup: how to build a team that will live longer than a year",

    content: "How to get customers to love your business from the start maiores?",
  },
  {
    id: 3,
    name: "article-img3.svg",
    alt: "The guy with the big hat",
    categoryName: "Design",
    type: "Article",
    date: "August 8, 2020",
    title: "Should you choose a creative profession if you are attracted to creativity?",
    content: "Curabitur nisl tincidunt eros venenatis vestibulunisl tincidunt eros venenatis vestibulu",
  },
  {
    id: 13,
    name: "article-img6.svg",
    alt: "Image minimalism",
    categoryName: "Design",
    type: "Podcast",
    date: "August 3, 2020",
    timeSpent: "36 min",
    title: "What are color profiles and how they work in graphic design",

    content:
      "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, cupiditate debitis ducimus facere illum in ipsam itaque molestiae nostrum placeat quasi quos recusandae, reiciendis sit, tempore unde. Laudantium, maiores?",
  },
  {
    id: 11,
    name: "article-img5.svg",
    alt: "Image minimalism",
    categoryName: "Marketing",
    type: "Podcast",
    date: "September 4, 2020",
    timeSpent: "36 min",
    title: "What is traffic arbitrage and does it really make money?",

    content:
      "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, cupiditate debitis ducimus facere illum in ipsam itaque molestiae nostrum placeat quasi quos recusandae, reiciendis sit, tempore unde. Laudantium, maiores?",
  },
  {
    id: 15,
    name: "article-img8.svg",
    alt: "Image minimalism",
    categoryName: "Design",
    type: "Podcast",
    date: "August 3, 2020",
    timeSpent: "36 min",
    title: "What are color profiles and how they work in graphic design",

    content:
      "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, cupiditate debitis ducimus facere illum in ipsam itaque molestiae nostrum placeat quasi quos recusandae, reiciendis sit, tempore unde. Laudantium, maiores?",
  },
  {
    id: 12,
    name: "article-img4.svg",
    alt: "Image minimalism",
    categoryName: "Design",
    type: "Podcast",
    date: "August 3, 2020",
    timeSpent: "36 min",
    title: "What are color profiles and how they work in graphic design",

    content:
      "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, cupiditate debitis ducimus facere illum in ipsam itaque molestiae nostrum placeat quasi quos recusandae, reiciendis sit, tempore unde. Laudantium, maiores?",
  },
  {
    id: 11,
    name: "article-img5.svg",
    alt: "Image minimalism",
    categoryName: "Marketing",
    type: "Podcast",
    date: "September 4, 2020",
    timeSpent: "36 min",
    title: "What is traffic arbitrage and does it really make money?",

    content:
      "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, cupiditate debitis ducimus facere illum in ipsam itaque molestiae nostrum placeat quasi quos recusandae, reiciendis sit, tempore unde. Laudantium, maiores?",
  },
  {
    id: 2,
    name: "article-img2.svg",
    alt: "Laptop picture",
    categoryName: "Development",
    type: "Article",
    date: "September 1, 2020",
    title: "How to choose the first programming language for a beginner",
    content:
      "Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestaslaoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas ",
  },
  {
    id: 3,
    name: "article-img3.svg",
    alt: "The guy with the big hat",
    categoryName: "Design",
    type: "Article",
    date: "August 8, 2020",
    title: "Should you choose a creative profession if you are attracted to creativity?",
    content: "Curabitur nisl tincidunt eros venenatis vestibulunisl tincidunt eros venenatis vestibulu",
  },
  {
    id: 12,
    name: "article-img4.svg",
    alt: "Image minimalism",
    categoryName: "Design",
    type: "Podcast",
    date: "August 3, 2020",
    timeSpent: "36 min",
    title: "What are color profiles and how they work in graphic design",

    content:
      "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, cupiditate debitis ducimus facere illum in ipsam itaque molestiae nostrum placeat quasi quos recusandae, reiciendis sit, tempore unde. Laudantium, maiores?",
  },
];
