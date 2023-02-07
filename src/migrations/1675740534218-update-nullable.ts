import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateNullable1675740534218 implements MigrationInterface {
  name = 'updateNullable1675740534218';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "created_at" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '"2023-02-07T03:28:55.123Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" ALTER COLUMN "created_at" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" ALTER COLUMN "created_at" SET DEFAULT '"2023-02-07T03:28:55.124Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reservation" ALTER COLUMN "created_at" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" ALTER COLUMN "created_at" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "created_at" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "created_at" DROP NOT NULL`,
    );
  }
}
