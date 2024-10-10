export type DataWrapper<T> = {
  data: {
    attributes: T;
  };
};

export type Image = {
  alternativeText: string | null;
  url: string;
  width: number;
  height: number;
};

export type Text = {
  id: number;
  text: string;
};

export type AboutMe = {
  Left: DataWrapper<Image>;
  Main: DataWrapper<Image>;
  Right: DataWrapper<Image>;
  Suggestion: Text[];
};

export type MainPageAttributes = {
  AboutMe: AboutMe;
  ContactMedia: DataWrapper<Image>;
  PresentImage: DataWrapper<Image>;
  Reviews: {
    data: {
      id: number,
      attributes: Image
    }[]
  };
  mainPhoto: DataWrapper<Image>;
};

export type ServiceAtrributes = {
    id: number;
    attributes: {
        price: number;
        subTitle: string;
    };
}[]
    

export type ServicesInfo = {
    data: ServiceAtrributes
    
}

export type MainPageInfo = DataWrapper<MainPageAttributes>

type FetchDataService = {
  title: string;
  subTitle: string;
  description: string;
  price: number;
  hint: string | null;
  PointsAfterServiceLeftCircle: Text[] | null;
  PointsAfterServiceRightCircle: Text[] | null;
  descriptionTags: {
    id: number;
    title: string;
    tags: Text[];
  };
  secondHint: string | null;
  mustBeReadTags: {
    id: number;
    title: string;
    tags: Text[];
  } | null;
  urgentlyField: boolean;
}

export type FullServiceInfo = DataWrapper<FetchDataService>

