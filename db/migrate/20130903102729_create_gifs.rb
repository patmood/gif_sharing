class CreateGifs < ActiveRecord::Migration
  def change
    create_table :gifs do |t|
      t.string :url
      t.string :imgurstub
      t.timestamps
    end
  end
end
