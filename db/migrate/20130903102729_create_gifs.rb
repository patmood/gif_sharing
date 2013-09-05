class CreateGifs < ActiveRecord::Migration
  def change
    create_table :gifs do |t|
      t.string :url
      t.string :token
      t.integer :upvotes, default: 0
      t.integer :downvotes, default: 0
      t.integer :score, default: 0
      t.boolean :nsfw, default: false, null: false
      t.timestamps
    end
  end
end
