class CreateJuries < ActiveRecord::Migration[6.1]
  def change
    create_table :juries do |t|
      t.string :name
      t.string :technique

      t.timestamps
    end
  end
end
