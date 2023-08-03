interface Screenshot {
  id: number;
  image: string;
  is_deleted: boolean;
}

export default interface Screenshots {
  results: Screenshot[];
}
