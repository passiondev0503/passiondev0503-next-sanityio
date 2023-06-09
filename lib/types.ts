import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Tag = {
  _id: string;
  title: string;
  slug: string;
};

export type Post = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  publishedAt: string;
  excerpt: string;
  mainImage: string;
  readingTime: string;
  tweets: any[];
  tags: Tag[];
  readTime: number;
};

export type Snippet = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  description: string;
  logo: string;
};

export type Project = {
  _id: string;
  slug: string;
  content: any;
  title: string;
  description: string;
  logo: string;
  link: string;
};

export type Timeline = {
  _id: string;
  content: MDXRemoteSerializeResult;
  title: string;
  startDate: string;
  endDate: string;
  logo: string;
};

export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Subscribers = {
  count: number;
};

export type Views = {
  total: number;
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TopTracks = {
  tracks: Song[];
};

export type YouTube = {
  subscriberCount: number;
  viewCount: number;
};

export type GitHub = {
  stars: number;
};

export type Unsplash = {
  downloads: number;
  views: number;
};
