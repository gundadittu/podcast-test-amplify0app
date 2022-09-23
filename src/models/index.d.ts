import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type PodcastMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Podcast {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Podcast, PodcastMetaData>);
  static copyOf(source: Podcast, mutator: (draft: MutableModel<Podcast, PodcastMetaData>) => MutableModel<Podcast, PodcastMetaData> | void): Podcast;
}