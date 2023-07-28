module CreateTablePartiesRequests

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

include("../../lib/DatabaseSupport.jl")
using .DatabaseSupport
import .DatabaseSupport: set_default

function up()
    create_table(:parties_requests) do
        [
            primary_key()
            column(:id_given, :integer)
            column(:country, :string)
            column(:state, :string)
            column(:town, :string)
            column(:contact, :string)
            column(:latitude, :float)
            column(:longitude, :float)
            column(:status, :string)
            column(:verified, :bool)
            column(:added, :bool)
        ]
    end

    set_default("parties_requests","verified",false)
    set_default("parties_requests","added",false)
end

function down()
    drop_table(:parties_requests)
end

end