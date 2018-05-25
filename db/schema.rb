# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_05_25_063303) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "participants", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "phone"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pod_participants", force: :cascade do |t|
    t.bigint "pod_id", null: false
    t.bigint "participant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["participant_id"], name: "index_pod_participants_on_participant_id"
    t.index ["pod_id"], name: "index_pod_participants_on_pod_id"
  end

  create_table "pods", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wishes", force: :cascade do |t|
    t.bigint "wishlist_id"
    t.string "name"
    t.string "url"
    t.string "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["wishlist_id"], name: "index_wishes_on_wishlist_id"
  end

  create_table "wishlists", force: :cascade do |t|
    t.bigint "pod_id", null: false
    t.bigint "participant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["participant_id"], name: "index_wishlists_on_participant_id"
    t.index ["pod_id"], name: "index_wishlists_on_pod_id"
  end

  add_foreign_key "pod_participants", "participants"
  add_foreign_key "pod_participants", "pods"
  add_foreign_key "wishes", "wishlists"
  add_foreign_key "wishlists", "participants"
  add_foreign_key "wishlists", "pods"
end
