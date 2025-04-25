/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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
 * @kit PerformanceAnalysisKit
 */

/**
 * Provides interfaces to trace a task for performance measure, the logs can be capture by the
 * bytrace cmdline available on the device.
 *
 * <p>This interfaces trace the start, end, and value changes of key processes that last for at least 3 ms.
 *
 * <p>Example:
 * Track the beginning of a context:
 * <pre>{@code
 * hiTraceMeter.startTrace("checkName", 111);
 * }</pre>
 * Track the end of a context:
 * <pre>{@code
 * hiTraceMeter.finishTrace("checkName", 111);
 * }</pre>
 * To trace the number of layers, which is 3:
 * <pre>{@code
 * hiTraceMeter.traceByValue("curLayer", 3);
 * }</pre>
 *
 * <p>Each {@code startTrace} matches one {@code finishTrace}, and they must have the same name
 * and taskId.
 *
 * @namespace hiTraceMeter
 * @syscap SystemCapability.HiviewDFX.HiTrace
 * @since 8
 */
/**
 * Provides interfaces to trace a task for performance measure, the logs can be capture by the
 * bytrace cmdline available on the device.
 *
 * <p>This interfaces trace the start, end, and value changes of key processes that last for at least 3 ms.
 *
 * <p>Example:
 * Track the beginning of a context:
 * <pre>{@code
 * hiTraceMeter.startTrace("checkName", 111);
 * }</pre>
 * Track the end of a context:
 * <pre>{@code
 * hiTraceMeter.finishTrace("checkName", 111);
 * }</pre>
 * To trace the number of layers, which is 3:
 * <pre>{@code
 * hiTraceMeter.traceByValue("curLayer", 3);
 * }</pre>
 *
 * <p>Each {@code startTrace} matches one {@code finishTrace}, and they must have the same name
 * and taskId.
 *
 * @namespace hiTraceMeter
 * @syscap SystemCapability.HiviewDFX.HiTrace
 * @atomicservice
 * @since 18
 */
declare namespace hiTraceMeter {

  /**
   * Enumerates the HiTrace output levels. The output level threshold system parameter determines the minimum output trace.
   *
   * @enum { number }
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @atomicservice
   * @since 18
   */
  enum HiTraceOutputLevel {
    /**
     * Ouput level only for debug usage.
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @atomicservice
     * @since 18
     */
    DEBUG = 0,

    /**
     * Output level for beta version usage.
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @atomicservice
     * @since 18
     */
    INFO = 1,

    /**
     * Output level for beta version usage, with higher priority than INFO.
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @atomicservice
     * @since 18
     */
    CRITICAL = 2,

    /**
     * Output level for commercial version usage.
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @atomicservice
     * @since 18
     */
    COMMERCIAL = 3,

    /**
     * Output level range limit.
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @atomicservice
     * @since 18
     */
    MAX = COMMERCIAL
  }

  /**
   * Records a trace marking it as the start of a task, can with the expected completion time between
   * startTrace and finishTrace.
   *
   * This method is invoked at the start of a transaction to indicate that a task has started, whose name
   * is specified by {@code name}, and the taskId is used to distinguish the tasks. It must be followed by
   * {@link #finishTrace}, the name and taskId need to be the same.
   *
   * @param { string } name Indicates the task name.
   * @param { number } taskId The unique id used to distinguish the tasks and match with the id in follow finishTrace.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8
   */
  /**
   * Records a trace marking it as the start of a task, can with the expected completion time between
   * startTrace and finishTrace.
   *
   * This method is invoked at the start of a transaction to indicate that a task has started, whose name
   * is specified by {@code name}, and the taskId is used to distinguish the tasks. It must be followed by
   * {@link #finishTrace}, the name and taskId need to be the same.
   *
   * @param { string } name Indicates the task name.
   * @param { number } taskId The unique id used to distinguish the tasks and match with the id in follow finishTrace.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @atomicservice
   * @since 18
   */
  function startTrace(name: string, taskId: number): void;

  /**
   * Records a trace and marks it as the end of a task.
   *
   * This method is invoked at the end of a transaction to indicate that a task has ended, whose name
   * is specified by {@code name}. This method must be invoked after the the startTrace.
   *
   * @param { string } name Indicates the task name. It must be the same with the {@code name} of startTrace.
   * @param { number } taskId The unique id used to distinguish the tasks and must be the same with the .
   * {@code taskId} of startTrace.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8
   */
  /**
   * Records a trace and marks it as the end of a task.
   *
   * This method is invoked at the end of a transaction to indicate that a task has ended, whose name
   * is specified by {@code name}. This method must be invoked after the the startTrace.
   *
   * @param { string } name Indicates the task name. It must be the same with the {@code name} of startTrace.
   * @param { number } taskId The unique id used to distinguish the tasks and must be the same with the .
   * {@code taskId} of startTrace.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @atomicservice
   * @since 18
   */
  function finishTrace(name: string, taskId: number): void;

  /**
   * Records a trace for generating a count, such as clock pulse and the number of layers.
   *
   * @param { string } name Indicates the name used to identify the count.
   * @param { number } count Indicates the number of the count.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8
   */
  /**
   * Records a trace for generating a count, such as clock pulse and the number of layers.
   *
   * @param { string } name Indicates the name used to identify the count.
   * @param { number } count Indicates the number of the count.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @atomicservice
   * @since 18
   */
  function traceByValue(name: string, count: number): void;

  /**
   * Records a trace marking it as the start of a task.
   *
   * This method is invoked at the start of a transaction to indicate that a task has started, whose name
   * is specified by {@code name}, and the taskId is used to distinguish the tasks. It must be followed by
   * {@link #finishSyncTrace}, called by the same thread with the same level.
   *
   * @param { HiTraceOutputLevel } level Indicates trace output priority level.
   * @param { string } name Indicates the task name.
   * @param { string } customArgs Indicates key=value pair to be outputed in trace; multiple pairs should use comma
   * as seperator.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @atomicservice
   * @since 18
   */
  function startSyncTrace(level: HiTraceOutputLevel, name: string, customArgs?: string): void;

  /**
   * Records a trace and marks it as the end of a task.
   *
   * This method is invoked at the end of a transaction to indicate that the nearest running task tracked by
   * startSyncTrace that has yet to be marked by finishSyncTrace, has ended.
   * This method must be invoked after the the {@link #startSyncTrace}, by the same thread.
   *
   * @param { HiTraceOutputLevel } level Indicates trace output priority level.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @atomicservice
   * @since 18
   */
  function finishSyncTrace(level: HiTraceOutputLevel): void;

  /**
   * Records a trace marking it as the start of a task.
   *
   * This method is invoked at the start of a transaction to indicate that a task has started, whose name
   * is specified by {@code name}, and the taskId is used to distinguish the tasks. It must be followed by a
   * corresponding {@link #finishAsyncTrace}, with the same level, name, and taskId.
   *
   * @param { HiTraceOutputLevel } level Indicates trace output priority level.
   * @param { string } name Indicates the task name.
   * @param { number } taskId The unique id used to distinguish the task and match with the id of the corresponding finishAsyncTrace.
   * @param { string } customCategory Indicates the label to aggregate asynchronous task display.
   * @param { string } customArgs Indicates key=value pair to be outputed in trace; multiple pairs should use comma as seperator.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @atomicservice
   * @since 18
   */
  function startAsyncTrace(level: HiTraceOutputLevel, name: string, taskId: number, customCategory: string, customArgs?: string): void;

  /**
   * Records a trace and marks it as the end of a task.
   *
   * This method is invoked at the end of a transaction to indicate that a task has ended, whose name is specified
   * by {@code name}. This method must be invoked after the the {@link #startAsyncTrace}, with the same level, name, and taskId.
   * It is not required to be invoked by the same thread calling startAsyncTrace.
   *
   * @param { HiTraceOutputLevel } level Indicates trace output priority level.
   * @param { string } name Indicates the task name.
   * @param { number } taskId The unique id used to distinguish the task and match with the id of the corresponding startAsyncTrace.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @atomicservice
   * @since 18
   */
  function finishAsyncTrace(level: HiTraceOutputLevel, name: string, taskId: number): void;

  /**
   * Records a trace for generating a count, such as clock pulse and the number of layers.
   *
   * @param { HiTraceOutputLevel } level Indicates trace output priority level.
   * @param { string } name Indicates the name used to identify the count.
   * @param { number } count Indicates the number of the count.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @atomicservice
   * @since 18
   */
  function traceByValue(level: HiTraceOutputLevel, name: string, count: number): void;

  /**
   * Return whether the current process is allowed to output trace.
   *
   * @returns { boolean } The status of whether the current process is allowed to output trace.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @atomicservice
   * @since 18
   */
  function isTraceEnabled(): boolean;

}

export default hiTraceMeter;
