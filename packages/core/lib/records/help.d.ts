import { LogBrush, Pen, PointS } from "../structs";
declare type RecordReader<R = any> = (buf: DataView, offset: number) => Array<R>;
export declare function offsetOf<F extends RecordReader>(input: F, offset: number): RecordReader<ReturnType<F>>;
export declare function int16_2(buf: DataView, offset: number): number[];
export declare function uint16(buf: DataView, offset: number): number[];
export declare function int32(buf: DataView, offset: number): number[];
export declare function rgb(buf: DataView, offset: number): number[];
export declare function pointS(buf: DataView, offset: number): PointS[];
export declare function penObject(buf: DataView, offset: number): Pen[];
export declare function logBrush(buf: DataView, offset: number): LogBrush[];
export {};