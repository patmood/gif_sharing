class CreateGifs < ActiveRecord::Migration
  def change
    create_table :gifs do |t|
      t.string :url
      t.string :token
      t.integer :upvotes
      t.integer :downvotes
      t.integer :score
      t.timestamps
    end
  end
end
