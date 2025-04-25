/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ArkData
 */

import Context from './application/BaseContext';
import relationalStore from './@ohos.data.relationalStore';

/**
 * Provides methods for intelligent data processing.
 *
 * @namespace intelligence
 * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
 * @since 15
 */
declare namespace intelligence {
  /**
   * Obtains a text embedding model.
   *
   * @param { ModelConfig } config - The configuration of the embedding model.
   * @returns { Promise<TextEmbedding> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 31300000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15
   */
  function getTextEmbeddingModel(config: ModelConfig): Promise<TextEmbedding>;

  /**
   * Obtains an image embedding model.
   *
   * @param { ModelConfig } config - The configuration of the embedding model.
   * @returns { Promise<ImageEmbedding> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 31300000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15
   */
  function getImageEmbeddingModel(config: ModelConfig): Promise<ImageEmbedding>;

  /**
   * Manages configurations of the embedding model.
   *
   * @interface ModelConfig
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15
   */
  interface ModelConfig {
    /**
     * Version of the model.
     * The outputs of text or image embedding models with the same version are in the same vector space.
     *
     * @type { ModelVersion }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15
     */
    version: ModelVersion;

    /**
     * Indicates whether NPU is used.
     *
     * @type { boolean }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15
     */
    isNpuAvailable: boolean;

    /**
     * If NPU is used for accelerating, a local path is required for model caching.
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15
     */
    cachePath?: string;
  }

  /**
   * Version of the model.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15
   */
  enum ModelVersion {
    /**
     * The basic embedding model.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15
     */
    BASIC_MODEL = 0
  }

  /**
   * Describes the text embedding functions of the multi-modal embedding model.
   * Chinese and English are supported.
   *
   * @interface TextEmbedding
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15
   */
  interface TextEmbedding {
    /**
     * Loads the embedding model. If the loading fails, an error code is returned.
     *
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15
     */
    loadModel(): Promise<void>;

    /**
     * Releases the embedding model. If the releasing fails, an error code is returned.
     *
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15
     */
    releaseModel(): Promise<void>;

    /**
     * Obtains the embedding vector for the given text.
     * The text should be no longer than 512 tokens.
     *
     * @param { string } text - The input text of the embedding model.
     * @returns { Promise<Array<number>> } The promise used to return the embedding result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15
     */
    getEmbedding(text: string): Promise<Array<number>>;

    /**
     * Obtains the embedding vector for the given batch of texts.
     * Each text should be no longer than 512 tokens.
     *
     * @param { Array<string> } batchTexts - The input batch of texts of the embedding model.
     * @returns { Promise<Array<Array<number>>> } The promise used to return the embedding result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15
     */
    getEmbedding(batchTexts: Array<string>): Promise<Array<Array<number>>>;
  }

  /**
   * Describes the image embedding functions of the multi-modal embedding model.
   *
   * @interface ImageEmbedding
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15
   */
  interface ImageEmbedding {
    /**
     * Loads the embedding model. If the loading fails, an error code is returned.
     *
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15
     */
    loadModel(): Promise<void>;

    /**
     * Releases the embedding model. If the releasing fails, an error code is returned.
     *
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15
     */
    releaseModel(): Promise<void>;

    /**
     * Obtains the embedding vector for the given image.
     * The image should be no larger than 20 MB.
     *
     * @param { Image } image - The input image of the embedding model.
     * @returns { Promise<Array<number>> } The promise used to return the embedding result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15
     */
    getEmbedding(image: Image): Promise<Array<number>>;
  }

  /**
   * The type of the image can be its URI.
   *
   * @typedef { string } Image
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 15
   */
  type Image = string;

  /**
   * Chunking process for text.
   *
   * @param { string } text - Text for chunking. The length of the text is no longer then 100k tokens.
   * @param { SplitConfig } config - Configurations of text chunking.
   * @returns { Promise<Array<string>> } The promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 31300000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15
   */
  function splitText(text: string, config: SplitConfig): Promise<Array<string>>;

  /**
   * Manages text chunk process configurations.
   *
   * @interface SplitConfig
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15
   */
  interface SplitConfig {
    /**
     * The maximun size of chunks.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15
     */
    size: number;

    /**
     * The ratio of overlap between adjacent chunks.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15
     */
    overlapRatio: number;
  }

  /**
   * Obtains a retriever.
   *
   * @param { RetrievalConfig } config - Indicates the {@link RetrievalConfig} configuration of the retriever.
   * @returns { Promise<Retriever> } The retriever object {@link Retriever}.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  function getRetriever(config: RetrievalConfig): Promise<Retriever>;

  /**
   * Manages retrieval configurations.
   *
   * @interface RetrievalConfig
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface RetrievalConfig {
    /**
     * An array of configurations for different retrieval channels.
     *
     * @type { Array<ChannelConfig> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    channelConfigs: Array<ChannelConfig>;
  }

  /**
   * Manages the configuration for each retrieval channel.
   *
   * @interface ChannelConfig
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface ChannelConfig {
    /**
     * The type of database for this retrieval channel.
     *
     * @type { ChannelType }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    channelType: ChannelType;

    /**
     * Indicates the context of an application or ability.
     *
     * @type { Context }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    context: Context;

    /**
     * The configuration of database for this retrieval channel.
     *
     * @type { DbConfig }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    dbConfig: DbConfig;
  }

  /**
   * Type of database.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  enum ChannelType {
    /**
     * Represents a vector database.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    VECTOR_DATABASE = 0,

    /**
     * Represents an inverted index database.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    INVERTED_INDEX_DATABASE
  }

  /**
   * Describes the configuration of the database.
   *
   * @typedef { relationalStore.StoreConfig } DbConfig
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  type DbConfig = relationalStore.StoreConfig;

  /**
   * Describes the retriever.
   *
   * @interface Retriever
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface Retriever {
    /**
     * Given the retrieval condition that includes query terms, recall conditions, and re-ranking strategies, 
     * retrieve a collection of records that meet the specified conditions from a relational store (RDB).
     *
     * @param { string } query - The query to the retrieval.
     * @param { RetrievalCondition } condition - The condition {@link RetrievalCondition} of the retrieve method.
     * @returns { Promise<RdbRecords> } The promise used to return the retrieved records {@link RdbRecords}.
     * @throws { BusinessError } 31300001 - Database corrupted.
     * @throws { BusinessError } 31300002 - Already closed.
     * @throws { BusinessError } 31300003 - The database is busy.
     * @throws { BusinessError } 31300004 - The database is out of memory.
     * @throws { BusinessError } 31300100 - SQLite: Generic error.
     * @throws { BusinessError } 31300101 - SQLite: Access permission denied.
     * @throws { BusinessError } 31300102 - SQLite: The database file is locked.
     * @throws { BusinessError } 31300103 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 31300104 - SQLite: The WAL file size exceeds the default limit.
     * @throws { BusinessError } 31300105 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 31301000 - Retrieval: An error occurred during the recall phase.
     * @throws { BusinessError } 31301001 - Retrieval: An error occurred during the re-ranking phase.
     * @throws { BusinessError } 31301002 - Retrieval: The value of the numerical parameter is outside the constrained range.
     * @throws { BusinessError } 31301003 - Retrieval: There are invalid primary keys.
     * @throws { BusinessError } 31301004 - Retrieval: A re-ranking algorithm that does not support composite primary keys was used.
     * @throws { BusinessError } 31301005 - Retrieval: There are fields with empty strings.
     * @throws { BusinessError } 31301006 - Retrieval: The filter input is invalid.
     * @throws { BusinessError } 31301007 - Retrieval: There are invalid recall names in RecallCondition.
     * @throws { BusinessError } 31301008 - Retrieval: The vector similarity threshold in VectorQuery is higher than the tiered threshold in VectorRerankParameter.
     * @throws { BusinessError } 31301009 - Retrieval: RerankMethod parameters do not match the channel type.
     * @throws { BusinessError } 31301010 - Retrieval: There exists a parameter value that should not be empty but is actually empty.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    retrieveRdb(query: string, condition: RetrievalCondition): Promise<RdbRecords>;
  }

  /**
   * Describes the retrieval conditions.
   *
   * @interface RetrievalCondition
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface RetrievalCondition {
    /**
     * The conditions {@link RecallCondition} for recall, where each item in the array corresponds to a recall operation.
     *
     * @type { Array<RecallCondition> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    recallConditions: Array<RecallCondition>;

    /**
     * The parameters of the re-ranking method {@link RerankMethod}.
     *
     * @type { ?RerankMethod }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    rerankMethod?: RerankMethod;

    /**
     * The maximum number of results allowed to be returned after re-ranking.
     *
     * @type { ?number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    resultCount?: number;
  }

  /**
   * Describes the conditions for a recall operation.
   *
   * @typedef { InvertedIndexRecallCondition | VectorRecallCondition } RecallCondition
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  type RecallCondition = InvertedIndexRecallCondition | VectorRecallCondition;

  /**
   * Describes the recall conditions for the inverted index retrieval.
   *
   * @interface InvertedIndexRecallCondition
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface InvertedIndexRecallCondition {
    /**
     * The table name of the fts5 data table used for the inverted index recall.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    ftsTableName: string;

    /**
     * Represents the table name in the database, supporting JOIN operations.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    fromClause: string;

    /**
     * Represents the column name(s) of the primary key, and this parameter supports composite primary keys.
     *
     * @type { Array<ColumnName> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    primaryKey: Array<ColumnName>;

    /**
     * The names of the columns included in the recall results.
     *
     * @type { Array<ColumnName> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    responseColumns: Array<ColumnName>;

    /**
     * The recall strategy {@link InvertedIndexStrategy} used for the inverted index database.
     *
     * @type { ?Array<InvertedIndexStrategy> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    invertedIndexStrategies?: Array<InvertedIndexStrategy>;

    /**
     * The name of the recall operation corresponding to this recall condition, used to identify this recall process.
     *
     * @type { ?RecallName }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    recallName?: RecallName;

    /**
     * Additional filtering conditions.
     *
     * @type { ?Array<FilterInfo> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    filters?: Array<FilterInfo>;

    /**
     * The maximum number of recalls for this recall process.
     *
     * @type { ?number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    deepSize?: number;
  }

  /**
   * The type of the column name.
   *
   * @typedef { string } ColumnName
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  type ColumnName = string;

  /**
   * The type of the identifier name for a recall operation.
   *
   * @typedef { string } RecallName
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  type RecallName = string;

  /**
   * Describes the filter information.
   *
   * @interface FilterInfo
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface FilterInfo {
    /**
     * The column names of the filtered columns. 
     * Any record in the database that satisfies the filter condition for any of its columns will be filtered out.
     *
     * @type { Array<ColumnName> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    columns: Array<ColumnName>;

    /**
     * The operator in the filter conditions.
     *
     * @type { ?Operator }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    operator?: Operator;

    /**
     * The filtering value in the filter conditions.
     *
     * @type { ?FilterValue}
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    filterValue?: FilterValue;

    /**
     * The filtering range in the filter conditions.
     *
     * @type { ?FilterRange }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    filterRange?: FilterRange;
  }

  /**
   * Describes the filtering value in the filter conditions.
   *
   * @typedef { string | number | bigint } FilterValue
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  type FilterValue = string | number | bigint;

  /**
   * Describes the filtering range in the filter conditions.
   *
   * @interface FilterRange
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface FilterRange {
    /**
     * The range of the filter: maximum.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    max: number;

    /**
     * The range of the filter: minimum.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    min: number;
  }

  /**
   * Types of the operator in the filter conditions.
   *
   * @enum { string }
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  enum Operator {
    /**
     * Means <column> = <value>.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    OP_EQ = '=',

    /**
     * Means <column> != <value>.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    OP_NE = '!=',

    /**
     * Means <column> < <value>, while <value> should be number.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    OP_LT = '<',

    /**
     * Means <column> <= <value>, while <value> should be number.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    OP_LE = '<=',

    /**
     * Means <column> > <value>, while <value> should be number.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    OP_GT = '>',

    /**
     * Means <column> >= <value>, while <value> should be number.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    OP_GE = '>=',

    /**
     * Means <column> IN <value>, while <value> should be string and be concatenated by ','.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    OP_IN = 'IN',

    /**
     * Means <column> NOT IN <value>, while <value> should be string and be concatenated by ','.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    OP_NOT_IN = 'NOT_IN',

    /**
     * Means <column> BETWEEN <range[0]> AND <range[1]>, while <value> should be array of numbers.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    OP_BETWEEN = 'BETWEEN',

    /**
     * Means <column> LIKE <value>, while <value> should be string.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    OP_LIKE = 'LIKE',

    /**
     * Means <column> NOT LIKE <value>, while <value> should be string.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    OP_NOT_LIKE = 'NOT_LIKE'
  }

  /**
   * Describes the inverted index recall strategy.
   *
   * @typedef { Bm25Strategy | ExactMatchingStrategy | ProximityStrategy } InvertedIndexStrategy
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  type InvertedIndexStrategy = Bm25Strategy | ExactMatchingStrategy | ProximityStrategy;

  /**
   * Describes the BM25 strategy used for inverted index recall.
   *
   * @interface Bm25Strategy
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface Bm25Strategy {
    /**
     * Represents the weights of multiple strategies. The weight must be non-negative number.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    bm25Weight: number;

    /**
     * Represents the weights of multiple columns. The weight must be non-negative number.
     *
     * @type { ?Record<ColumnName, number> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    columnWeight?: Record<ColumnName, number>;
  }

  /**
   * Describes the exact phrase matching stratey used for inverted index recall.
   *
   * @interface ExactMatchingStrategy
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface ExactMatchingStrategy {
    /**
     * Represents the weights of multiple strategies. The weight must be non-negative number.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    exactMatchingWeight: number;

    /**
     * Represents the weights of multiple columns. The weight must be non-negative number.
     *
     * @type { ?Record<ColumnName, number> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    columnWeight?: Record<ColumnName, number>;
  }

  /**
   * Describes the proximity and out-of-order matching stratey for inverted index recall.
   *
   * @interface ProximityStrategy
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface ProximityStrategy {
    /**
     * Represents the weights of multiple strategies. The weight must be non-negative number.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    proximityWeight: number;

    /**
     * Represents the weights of multiple columns. The weight must be non-negative number.
     *
     * @type { ?Record<ColumnName, number> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    columnWeight?: Record<ColumnName, number>;

    /**
     * The offset configuration used for each out-of-order matching column. Must be positive integer.
     *
     * @type { ?Record<ColumnName, number> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    columnSlops?: Record<ColumnName, number>;
  }

  /**
   * Describes the recall conditions for vector retrieval.
   *
   * @interface VectorRecallCondition
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface VectorRecallCondition {
    /**
     * The query vector used for vector data retrieval {@link VectorQuery}.
     * Typically, the query vector is generated from the query term in Retriever {@link Retriever} 
     * using an embedding model{@link TextEmbedding}.
     *
     * @type { VectorQuery }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    vectorQuery: VectorQuery;

    /**
     * Represents the table name in the database, supporting JOIN operations.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    fromClause: string;

    /**
     * Represents the column name(s) of the primary key, and this parameter supports composite primary keys.
     *
     * @type { Array<ColumnName> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    primaryKey: Array<ColumnName>;

    /**
     * The names of the columns included in the recall results.
     *
     * @type { Array<ColumnName> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    responseColumns: Array<ColumnName>;

    /**
     * The name of the recall operation corresponding to this recall condition, used to identify this recall process.
     *
     * @type { ?RecallName }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    recallName?: RecallName;

    /**
     * Additional filtering conditions.
     *
     * @type { ?Array<FilterInfo> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    filters?: Array<FilterInfo>;

    /**
     * The maximum number of recalls for this recall process.
     *
     * @type { ?number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    deepSize?: number;
  }

  /**
   * Describes the query vector.
   *
   * @interface VectorQuery
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface VectorQuery {
    /**
     * The column name of the vector column.
     *
     * @type { ColumnName }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    column: ColumnName;

    /**
     * The vector value of the vector column.
     *
     * @type { Float32Array }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    value: Float32Array;

    /**
     * The threshold used to filter out dissimilar vectors based on similarity.
     *
     * @type { ?number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    similarityThreshold?: number;
  }

  /**
   * Describes the parameters of the re-ranking strategy.
   *
   * @interface RerankMethod
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface RerankMethod {
    /**
     * Represents the type of re-ranking algorithms.
     *
     * @type { RerankType }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    rerankType: RerankType;

    /**
     * Represents the mapping relationship between each retrieval channel and the re-ranking algorithm parameters.
     *
     * @type { ?Record<ChannelType, RerankParameter> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    parameters?: Record<ChannelType, RerankParameter>;

    /**
     * Indicates whether to use the softmax function to normalize the results from multiple recalls.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    isSoftmaxNormalized?: boolean;
  }

  /**
   * Represents type of re-ranking algorithms.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  enum RerankType {
    /**
     * Represents Reciprocal Rank Fusion (RRF) method.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    RRF = 0,

    /**
     * Represents score-based recall fusion method.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    FUSION_SCORE
  }

  /**
   * Describes the re-ranking algorithm parameter configuration.
   *
   * @typedef { InvertedIndexRerankParameter | VectorRerankParameter } RerankParameter
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  type RerankParameter = InvertedIndexRerankParameter | VectorRerankParameter;

  /**
   * Describes the parameters of the re-ranking algorithm used for inverted index.
   *
   * @interface InvertedIndexRerankParameter
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface InvertedIndexRerankParameter {
    /**
     * Represents the weight corresponding to each recall process. The weight must be non-negative number.
     *
     * @type { Record<RecallName, number> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    invertedIndexWeights: Record<RecallName, number>;
  }

  /**
   * Describes the parameters of the re-ranking algorithm used for vector data.
   *
   * @interface VectorRerankParameter
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface VectorRerankParameter {
    /**
     * Represents the weight corresponding to each recall process. The weight must be non-negative number.
     *
     * @type { Record<RecallName, number> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    vectorWeights: Record<RecallName, number>;

    /**
     * The tiered thresholds for vector recall, 
     * which will affect the division of similarityLevel {@link SimilarityLevel} in the retrieval results.
     * Currently, the results can be divided into three tiers (high, medium, low) using two thresholds.
     * 
     * @type { ?Array<number> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    thresholds?: Array<number>;

    /**
     * An optimization measure for query terms containing numbers.
     * Since embedding models cannot accurately represent numerical magnitudes,
     * and numerical values are often critical retrieval criteria,
     * this measure ensures that if a column in the vector recall results contains numbers that differ from those in the query terms,
     * the final similarity level {@link SimilarityLevel} will not exceed a medium level.
     * 
     * @type { ?Record<RecallName, ColumnName> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    numberInspector?: Record<RecallName, ColumnName>;
  }

  /**
   * Describes the retrieval results.
   *
   * @interface RdbRecords
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface RdbRecords {
    /**
     * Describes the collection of retrieved records {@link ItemInfo}.
     *
     * @type { Array<ItemInfo> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    records: Array<ItemInfo>;
  }

  /**
   * Describes the specific content of each record in the retrieval results.
   *
   * @interface ItemInfo
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface ItemInfo {
    /**
     * Represents the primary key of the retrieval results.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    primaryKey: string;

    /**
     * Represents the recall columns and their contents.
     *
     * @type { Record<string, relationalStore.ValueType> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    columns: Record<string, relationalStore.ValueType>;

    /**
     * Represents the final score after retrieval re-ranking,
     * which qualitatively reflects the similarity between the re-ranked records and the query terms.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    score: number;

    /**
     * Represents the scores from each recall process,
     * which qualitatively reflects the similarity between the records after each recall and the query terms.
     *
     * @type { Record<ChannelType, Record<string, RecallScore>> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    recallScores: Record<ChannelType, Record<string, RecallScore>>;

    /**
     * Represents the scores from different inverted index strategies.
     *
     * @type { Record<string, number> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    features: Record<string, number>;

    /**
     * Represents the similarity of the retrieval results to the query vectors.
     * Influenced by vectorRerankThresholds in the re-ranking algorithm configuration {@link VectorRerankParameter}.
     * Currently, supporting three tiers (high, medium, low).
     *
     * @type { SimilarityLevel }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    similarityLevel: SimilarityLevel;
  }

  /**
   * Describes the score of the recall process.
   *
   * @interface RecallScore
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  interface RecallScore {
    /**
     * Represents the recall score.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    score: number;

    /**
     * Indicates whether the score is obtained from the original recall process or from a reverse query process.
     *
     * @type { boolean }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    isReverseQuery: boolean;
  }

  /**
   * Represents the similarity of the retrieval result to the query vector.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 18
   */
  enum SimilarityLevel {
    /**
     * There is no query vector in the recall conditions {@link VectorRecallCondition}.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    NONE = 0,

    /**
     * Indicates a low similarity between the query vector and the retrieval result.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    LOW,

    /**
     * Indicates a medium similarity between the query vector and the retrieval result.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    MEDIUM,

    /**
     * Indicates a high similarity between the query vector and the retrieval result.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 18
     */
    HIGH
  }
}

export default intelligence;