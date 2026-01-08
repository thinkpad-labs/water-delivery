CREATE TYPE "public"."consumer_status" AS ENUM('active', 'inactive', 'banned');--> statement-breakpoint
CREATE TYPE "public"."distributor_status" AS ENUM('active', 'inactive', 'pending');--> statement-breakpoint
CREATE TYPE "public"."order_status" AS ENUM('pending', 'delivered', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."payment_method" AS ENUM('cash', 'card', 'online');--> statement-breakpoint
CREATE TABLE "bills" (
	"id" uuid PRIMARY KEY NOT NULL,
	"distributor_id" uuid,
	"brand_id" uuid,
	"count" integer,
	"price" real,
	"payment_method" "payment_method"
);
--> statement-breakpoint
CREATE TABLE "brands" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE "consumers" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"status" "consumer_status"
);
--> statement-breakpoint
CREATE TABLE "distributor_brand" (
	"distributor_id" uuid,
	"brand_id" uuid,
	"price" real NOT NULL
);
--> statement-breakpoint
CREATE TABLE "distributors" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"status" "distributor_status"
);
--> statement-breakpoint
CREATE TABLE "logs" (
	"id" uuid PRIMARY KEY NOT NULL,
	"body" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"id" uuid PRIMARY KEY NOT NULL,
	"consumer_id" uuid,
	"bill_id" uuid,
	"status" "order_status"
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text,
	"phone" varchar,
	"email" text,
	"password" varchar NOT NULL,
	"location" "point"
);
--> statement-breakpoint
ALTER TABLE "bills" ADD CONSTRAINT "bills_distributor_id_distributors_id_fk" FOREIGN KEY ("distributor_id") REFERENCES "public"."distributors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bills" ADD CONSTRAINT "bills_brand_id_brands_id_fk" FOREIGN KEY ("brand_id") REFERENCES "public"."brands"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "consumers" ADD CONSTRAINT "consumers_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "distributor_brand" ADD CONSTRAINT "distributor_brand_distributor_id_distributors_id_fk" FOREIGN KEY ("distributor_id") REFERENCES "public"."distributors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "distributor_brand" ADD CONSTRAINT "distributor_brand_brand_id_brands_id_fk" FOREIGN KEY ("brand_id") REFERENCES "public"."brands"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "distributors" ADD CONSTRAINT "distributors_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_consumer_id_consumers_id_fk" FOREIGN KEY ("consumer_id") REFERENCES "public"."consumers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_bill_id_bills_id_fk" FOREIGN KEY ("bill_id") REFERENCES "public"."bills"("id") ON DELETE no action ON UPDATE no action;