import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTables1675149796707 implements MigrationInterface {
  name = 'createTables1675149796707';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying(50) NOT NULL, "password" character varying(50) NOT NULL, "student_id" character varying(10) NOT NULL, "name" character varying(20) NOT NULL, "email" character varying(30), "type" character varying(20) DEFAULT 'user', "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_726563a72061070f771b221345b" UNIQUE ("student_id"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "reservation" ("id" SERIAL NOT NULL, "table_name" character varying(30) NOT NULL, "times" integer array NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL, "student_id_id" integer, CONSTRAINT "PK_48b1f9922368359ab88e8bfa525" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" ADD CONSTRAINT "FK_d62f8c0e66420f43357741397f1" FOREIGN KEY ("student_id_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reservation" DROP CONSTRAINT "FK_d62f8c0e66420f43357741397f1"`,
    );
    await queryRunner.query(`DROP TABLE "reservation"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
