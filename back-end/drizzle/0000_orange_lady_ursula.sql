CREATE TYPE "public"."distributor_status" AS ENUM('approved', 'suspended', 'not_in_operation');--> statement-breakpoint
CREATE TABLE "distributors" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "distributors_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user_id" integer,
	"status" "distributor_status"
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" text NOT NULL,
	"email" text,
	"phone" text,
	"password" varchar(64),
	"location" geometry(Point, 4326),
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_phone_unique" UNIQUE("phone")
);
--> statement-breakpoint
ALTER TABLE "distributors" ADD CONSTRAINT "distributors_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;