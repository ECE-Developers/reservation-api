import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateUsingMoment1675998694821 implements MigrationInterface {
  name = 'updateUsingMoment1675998694821';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_at"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "created_at" character varying NOT NULL DEFAULT '2023-02-10'`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated_at"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "updated_at" character varying NOT NULL DEFAULT '2023-02-10'`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" DROP COLUMN "created_at"`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" ADD "created_at" character varying NOT NULL DEFAULT '2023-02-10'`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" DROP COLUMN "deleted_at"`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" ADD "deleted_at" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reservation" DROP COLUMN "deleted_at"`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" ADD "deleted_at" TIMESTAMP WITH TIME ZONE`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" DROP COLUMN "created_at"`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2023-02-09 17:48:42.805+09'`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated_at"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2023-02-09 17:48:42.804+09'`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_at"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2023-02-09 17:48:42.804+09'`,
    );
  }
}
