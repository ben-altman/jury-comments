class CreateRepertoires < ActiveRecord::Migration[6.1]
  def change
    create_table :repertoires do |t|
      t.string :composer
      t.string :title
      t.references :jury, null: false, foreign_key: true

      t.timestamps
    end
  end
end
