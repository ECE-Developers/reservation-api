import { MigrationInterface, QueryRunner } from "typeorm";

export class updateReservationTable1675152879495 implements MigrationInterface {
    name = 'updateReservationTable1675152879495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservation" DROP CONSTRAINT "FK_d62f8c0e66420f43357741397f1"`);
        await queryRunner.query(`ALTER TABLE "reservation" RENAME COLUMN "student_id_id" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "reservation" ADD CONSTRAINT "FK_e219b0a4ff01b85072bfadf3fd7" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservation" DROP CONSTRAINT "FK_e219b0a4ff01b85072bfadf3fd7"`);
        await queryRunner.query(`ALTER TABLE "reservation" RENAME COLUMN "user_id" TO "student_id_id"`);
        await queryRunner.query(`ALTER TABLE "reservation" ADD CONSTRAINT "FK_d62f8c0e66420f43357741397f1" FOREIGN KEY ("student_id_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
