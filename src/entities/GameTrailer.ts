interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

export default interface GameTrailer {
  results: Trailer[];
}
