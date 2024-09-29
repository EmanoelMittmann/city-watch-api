import { ApiProperty } from "@nestjs/swagger";

export class CustomHeaderListing<T> {

    @ApiProperty()
    size: number;

    @ApiProperty({ type: [Object] })
    data: T[];

    constructor(
        paginate: CustomHeaderListing<T>
    ){
        this.data = paginate.data;
        this.size = paginate.size;
    }
}