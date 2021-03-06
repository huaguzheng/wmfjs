import { BYTE_PER_WORD, SerializableRecord } from "../Serializable";
import { LiteralType, readonly, serialize } from "../decorators";
import { RecordType, TernaryRasterOperation } from "../enums";
import { DeviceIndependentBitmap } from "../structs/DeviceIndependentBitmap";

export class META_DIBSTRETCHBLT extends SerializableRecord {

    @readonly
    @serialize(LiteralType.uint32)
    public get recordSize(): number {
        if (this.target) {
            return (26 + this.target.byteSize) / BYTE_PER_WORD;
        } else {
            return 28 / BYTE_PER_WORD;
        }
    };

    @serialize(LiteralType.uint16)
    public readonly recordFunction: RecordType = RecordType.META_DIBSTRETCHBLT;

    @serialize(LiteralType.uint32)
    public rasterOperation: TernaryRasterOperation = TernaryRasterOperation.D;

    @serialize(LiteralType.int16)
    public srcHeight: number = 0;

    @serialize(LiteralType.int16)
    public srcWidth: number = 0;

    @serialize(LiteralType.int16)
    public ySrc: number = 0;

    @serialize(LiteralType.int16)
    public xSrc: number = 0;

    @serialize(LiteralType.int16)
    public destHeight: number = 0;

    @serialize(LiteralType.int16)
    public destWidth: number = 0;

    @serialize(LiteralType.int16)
    public yDest: number = 0;

    @serialize(LiteralType.int16)
    public xDest: number = 0;

    @serialize()
    public target: DeviceIndependentBitmap = new DeviceIndependentBitmap();
}
