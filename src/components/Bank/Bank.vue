<template>
  <div>
    <p class="title">Cadastro de Banco</p>
    <hr />
    <form class="form-group" @submit.prevent="save()" v-if="bInsert">
      <div>
        <label>Código</label>
        <input
          class="form-control"
          type="text"
          ref="codebank"
          name="code"
          id="txtcode"
          placeholder="Digite o código"
          v-model="bankModel.code"
        />
      </div>
      <div class="form-group">
        <label>Descrição</label>
        <input
          class="form-control"
          type="text"
          name="description"
          id="txtdescription"
          placeholder="Digite o nome"
          v-model="bankModel.description"
        />
      </div>
      <div class="form-group row2">
        <button type="submit" class="btn btn-primary">Salvar</button>
        <button
          @click.prevent="clear()"
          class="btn btn-secondary"
          style="margin: 10px"
        >
          Cancelar
        </button>
      </div>
      <hr />
    </form>
    <div id="listBank" v-else>
      <button @click="insertForm(true)" class="btn btn-primary btn-insert">
        Inserir
      </button>
      <br /><br />
      <!-- <table class="tableBank table">
        <thead>
          <th>Id</th>
          <th>Código</th>
          <th>Descrição</th>
          <th>Opção</th>
        </thead>
        <tbody>
          <tr v-for="(bank, index) in banks" :key="index">
            <td>{{ bank.id }}</td>
            <td>{{ bank.code }}</td>
            <td>{{ bank.description }}</td>
            <td>
              <button @click="alter(bank)" class="btn btn-warning ml-2">
                Alterar
              </button>
              <button @click="remove(bank)" class="btn btn-danger ml-2">
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table> -->
      <!-- <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Identificador
          </th>
          <th class="text-left">
            Codigo
          </th>
          <th class="text-left">
            Descrição
          </th>
          <th>Opção</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="bank in banks"
          :key="bank.id"
        >
          <td>{{ bank.id }}</td>
          <td>{{ bank.code }}</td>
          <td>{{ bank.description }}</td>
                  <td>
              <button @click="alter(bank)" class="btn btn-warning ml-2">
                Alterar
              </button>
              <button @click="remove(bank)" class="btn btn-danger ml-2">
                Excluir
              </button>
            </td>
    
        </tr>
      </tbody>
    </template>
     </v-simple-table> -->
      <v-data-table
    :headers="headers"
    :items="banks"
    sort-by="id"
    class="elevation-1"
  >
    <!-- <template v-slot:items="{ bank }">
      <td>{{ bank.id }}</td>
      <td>{{ bank.code }}</td>
      <td>{{ bank.description }}</td>
      <td>Valor: {{ bank.id }}</td>
          </template> -->
       <!-- <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon> -->

              <!-- <button @click="alter(bank)" class="btn btn-warning ml-2">
                Alterar
              </button>
              <button @click="remove(bank)" class="btn btn-danger ml-2">
                Excluir
              </button> -->
            
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="alter(item)"
      >
      
        mdi-pencil
      </v-icon>
      <v-icon
        small
       @click="remove(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    </v-data-table>
    </div>
  </div> 
  
</template>

<script>
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import bankModel from "../Models/bankModel";

export default {
  data() {
    return {
      banks: [bankModel],
      bankModel,
      bInsert: false,
      bCarregado: false,
      headers: [
        {
        text: 'Identificador',
        value: 'id',
        align: 'start',        
      },
      {
        text: 'Código',
        value: 'code',
        align: 'right'        
      },
      {
        text: 'Descrição',
        value: 'description',
        align: 'left'
      },
      { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [
          {
            code: 'teste',
            description: 'teste',
          },
           {
            code: 'teste 2',
            description: 'teste 2',
          },

        ],
    };
  },
  props: {},
  computed: {
  },
  mounted() {
    setTimeout(() => {
      this.GetAll();  
    }, 100);
  },
  methods: {
    save() {
      if (this.bankModel.id > 0) {
        axios
          .put("http://localhost:6001/api/bank", this.bankModel)
          .then(() => this.clear())
          .catch((error) => console.log(error));
      } else {
        axios
          .post("http://localhost:6001/api/bank", this.bankModel)
          .then(() => this.clear())
          .catch((error) => console.log(error));
      }

      setTimeout(() => {
        this.GetAll();
        this.insertForm(false);
      }, 1000);
    },
    remove(bank) {
      if (confirm(`Deseja realmente remover o banco ${bank.description}`)) {
        axios
          .delete(`http://localhost:6001/api/bank/${bank.id}`)
          .catch((error) => console.log(error));
      }

      setTimeout(() => {
        this.GetAll();
      }, 300);
    },
    GetAll() {
      axios
        .get("http://localhost:6001/api/bank/all")
        .then((result) => (this.banks = result.data));
    },
    alter(info) {
      this.insertForm(true);

      this.bankModel.id = info.id;
      this.bankModel.code = info.code;
      this.bankModel.description = info.description;

      setTimeout(() => {
        this.$refs.codebank.focus();
      }, 10);
    },
    clear() {
      this.bankModel.id = "";
      this.bankModel.code = "";
      this.bankModel.description = "";

      this.insertForm(false);
    },
    insertForm(option) {
      this.bInsert = option;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tableBank {
  border: 1px solid black;
  width: 100%;
}

.title {
  font-weight: bold;
  font-size: 2em;
}

.btn-insert {
  width: 180px;
  height: 40px;
}

.btn-warning {
  margin-left: 0px !important;
}
</style>
