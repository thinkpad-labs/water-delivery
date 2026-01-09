ALTER TABLE "bills" ALTER COLUMN "count" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bills" ALTER COLUMN "price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bills" ALTER COLUMN "payment_method" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "brands" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "google_id" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "provider" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "picture" varchar(500);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_google_id_unique" UNIQUE("google_id");