import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './entities/contacts.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  // 전체 연락처 리스트를 가지고 온다.
  findAll(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  // 연락처를 가지고온다.(id)
  findOne(id: number): Promise<Contact> {
    return this.contactRepository.findOne(id);
  }

  // 연락처를 삭제한다.
  async remove(id: number): Promise<void> {
    await this.contactRepository.delete(id);
  }

  // 연락처를 추가한다.
  create(name: string, dept: string, phone: string, mail: string) {
    const contact = {
      name,
      dept,
      phone,
      mail,
    };
    return this.contactRepository.save(contact);
  }

  // 연락처를 수정한다.
  async update(id: number, name: string, dept: string, phone: string, mail: string) {
    const contact = await this.contactRepository.findOne(id);
    contact.name = name;
    contact.dept = dept;
    contact.phone = phone;
    contact.mail = mail;
    return this.contactRepository.save(contact);
  }
}
