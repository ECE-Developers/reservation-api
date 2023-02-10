import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateReserveSideTables1675930082071
  implements MigrationInterface
{
  name = 'updateReserveSideTables1675930082071';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '"2023-02-09T08:08:02.934Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT '"2023-02-09T08:08:02.934Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" ALTER COLUMN "created_at" SET DEFAULT '"2023-02-09T08:08:02.934Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reservation" ALTER COLUMN "created_at" SET DEFAULT '2023-02-07 18:51:52.827+09'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT '2023-02-07 18:51:52.827+09'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '2023-02-07 18:51:52.827+09'`,
    );
  }
}
