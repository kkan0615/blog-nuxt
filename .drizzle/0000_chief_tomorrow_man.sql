CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"postId" text NOT NULL,
	"nickname" varchar(100) NOT NULL,
	"password" text NOT NULL,
	"content" text NOT NULL,
	"ipAddress" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
