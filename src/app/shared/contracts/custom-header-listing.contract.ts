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

export class CustomPaginateHeader<T> extends CustomHeaderListing<T> {
    
        @ApiProperty()
        page: number;

        @ApiProperty()
        final_page: number;
    
        constructor(
            paginate: CustomPaginateHeader<T>
        ){
            super(paginate);
            this.page = paginate.page;
            this.final_page = paginate.final_page;
        }
}