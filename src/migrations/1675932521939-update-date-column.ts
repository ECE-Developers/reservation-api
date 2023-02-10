import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateDateColumn1675932521939 implements MigrationInterface {
  name = 'updateDateColumn1675932521939';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reservation" ADD "date" character varying(15) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '"2023-02-09T08:48:42.804Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT '"2023-02-09T08:48:42.804Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" ALTER COLUMN "created_at" SET DEFAULT '"2023-02-09T08:48:42.805Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reservation" ALTER COLUMN "created_at" SET DEFAULT '2023-02-09 17:08:02.934+09'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT '2023-02-09 17:08:02.934+09'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '2023-02-09 17:08:02.934+09'`,
    );
    await queryRunner.query(`ALTER TABLE "reservation" DROP COLUMN "date"`);
  }
}
