-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Menu" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "body" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "createdUid" TEXT NOT NULL,
    "updatedAt" DATETIME,
    "updatedUid" TEXT NOT NULL
);
INSERT INTO "new_Menu" ("body", "createdAt", "createdUid", "description", "id", "published", "title", "updatedAt", "updatedUid") SELECT "body", "createdAt", "createdUid", "description", "id", "published", "title", "updatedAt", "updatedUid" FROM "Menu";
DROP TABLE "Menu";
ALTER TABLE "new_Menu" RENAME TO "Menu";
CREATE UNIQUE INDEX "Menu_title_key" ON "Menu"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
