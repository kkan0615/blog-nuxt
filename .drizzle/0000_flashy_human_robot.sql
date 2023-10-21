CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"post_id" text NOT NULL,
	"comment_id" integer,
	"nickname" varchar(100) NOT NULL,
	"password" text NOT NULL,
	"content" text NOT NULL,
	"ip_address" text,
	"is_secret" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subscribes" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"is_confirmed" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"deleted_at" timestamp
);
