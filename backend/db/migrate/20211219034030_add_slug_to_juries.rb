class AddSlugToJuries < ActiveRecord::Migration[6.1]
  def change
    add_column :juries, :slug, :string
  end
end
