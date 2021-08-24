import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './entities/contacts.entity';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  async findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Post()
  async create(
    @Body()
    { name, dept, phone, mail }: { name: string; dept: string; phone: string; mail: string },
  ): Promise<Contact> {
    return this.contactsService.create(name, dept, phone, mail);
  }
  
/**
       * PATCH 방식. 값은 위들과 같습니다.
     * @FIeld("title") String title : patch 방식을 통해 title 에 해당하는 값을 넘기기 위해 사용.
     * @FormUrlEncoded Field 형식 사용 시 Form이 Encoding 되어야 하기 때문에 사용하는 어노테이션
     * @param title
     * @return
     */
    @FormUrlEncoded
    @Patch("/posts/1")
    Call<Data> patchData(@Field("title") String title);


  @Delete(':id')
  async remove(@Param('id') id: number) {
    console.log(id);
    return this.contactsService.remove(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body()
    { name, dept, phone, mail }: { name: string; dept: string; phone: string; mail: string },
  ) {
    return this.contactsService.update(id, name, dept, phone, mail);
  }
}
