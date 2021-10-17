<template>
  <div>
    <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon> -->
    <v-btn fab icon @click.stop="drawer = !drawer" class="hidden-md-and-up">
      <v-badge :content="itemsInCart.length" :value="itemsInCart.length" left bordered overlap color="#ff4b24">
        <v-icon>fas fa-cart-plus</v-icon>
      </v-badge>
    </v-btn>
    <v-navigation-drawer v-model="drawer" app color="white" right width="310" :permanent="$vuetify.breakpoint.mdAndUp">
      <v-list subheader two-line class="mt-1">
        <v-list-item>
          <v-list-item-avatar rounded>
            <v-img src="https://source.unsplash.com/100x100/?face"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-subtitle>I'm a Cashier</v-list-item-subtitle>
            <v-list-item-title>Kamz</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-badge bordered overlap color="red" dot>
              <v-icon>far fa-bell</v-icon>
            </v-badge>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <strong class="ml-3">Bills</strong>
      <v-list subheader two-line class="mt-1" v-for="(item, i) in itemsInCart" :key="i">
        <v-list-item>
          <v-list-item-avatar rounded color="grey lighten-4">
            <v-img :src="item.img"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="subtitle-2">{{ item.name }} ({{ item.size }})</v-list-item-title>
            <v-list-item-subtitle>
              <v-btn plain color="#ff4b24" class="pa-0" style="min-width:auto; width:auto; height:auto;" @click="addQty(i, 'd')">
                <v-icon style="font-size:12px;">fas fa-minus-square</v-icon>
              </v-btn>
              X{{ item.qty }}
              <v-btn plain color="#ff4b24" class="pa-0" style="min-width:auto; width:auto; height:auto;" @click="addQty(i, 'i')">
                <v-icon style="font-size:12px;">fas fa-plus-square</v-icon>
              </v-btn>
              <v-btn plain color="#ff4b24" small>
                Notes
                <v-icon right>mdi-pencil</v-icon>
              </v-btn>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-group>
            <v-list-item-subtitle>
              <v-list-item-action class="caption ma-0">Rp. {{ item.price | formatCurrency }}</v-list-item-action>
              <v-btn icon color="#ff4b24" small @click="removeItem(i)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-subtitle>
          </v-list-item-group>
        </v-list-item>
      </v-list>
      <v-toolbar color="rgba(0,0,0,0)" flat>
        <strong>Subtotal</strong><v-spacer></v-spacer><strong>Rp. {{ Total | formatCurrency }}</strong>
      </v-toolbar>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n6">
        <span>Tax(10%)</span><v-spacer></v-spacer><span>Rp. {{ ((Total * 10) / 100) | formatCurrency }}</span>
      </v-toolbar>
      <v-divider class="mx-4"></v-divider>
      <v-toolbar color="rgba(0,0,0,0)" flat>
        <strong>Total</strong><v-spacer></v-spacer><strong>Rp. {{ (Total + (Total * 10) / 100) | formatCurrency }}</strong>
      </v-toolbar>
      <strong class="ml-5">Payment Method</strong>
      <v-item-group mandatory class="mt-n1">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="4">
              <v-item v-slot="{ active, toggle }">
                <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-lg" dark height="70" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-list-item three-line class="text-center mt-1">
                        <v-list-item-content>
                          <div>
                            <v-icon :color="active ? '#ff4b24' : 'black'">
                              fas fa-money-bill-wave
                            </v-icon>
                          </div>
                          <v-list-item-subtitle :class="active ? 'red--text' : 'black--text'" class="mt-n2 caption">Cash</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="4">
              <v-item v-slot="{ active, toggle }">
                <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-lg" dark height="70" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-list-item three-line class="text-center mt-1">
                        <v-list-item-content>
                          <div>
                            <v-icon :color="active ? '#ff4b24' : 'black'">
                              fas fa-credit-card
                            </v-icon>
                          </div>
                          <v-list-item-subtitle :class="active ? 'red--text' : 'black--text'" class="mt-n2 caption">Debit Card</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="4">
              <v-item v-slot="{ active, toggle }">
                <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-lg" dark height="70" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-list-item three-line class="text-center mt-1">
                        <v-list-item-content>
                          <div>
                            <v-icon :color="active ? '#ff4b24' : 'black'">
                              fas fa-qrcode
                            </v-icon>
                          </div>
                          <v-list-item-subtitle :class="active ? 'red--text' : 'black--text'" class="mt-n2 caption">E-Wallet</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <div class="mx-3 mt-2">
        <v-btn color="#ff4b24" block dark class="widthoutupercase">Print</v-btn>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ["itemsInCart"],
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    Total() {
      let total = 0;
      this.itemsInCart.forEach((item) => {
        total += item.price * item.qty;
      });
      return total;
    },
  },
  methods: {
    // Remove item by its index
    removeItem(index) {
      this.itemsInCart.splice(index, 1);
    },
    // Increase or decrease qty by its index
    addQty(index, type) {
      if (type === "i") {
        this.itemsInCart[index].qty += 1;
      } else {
        if (this.itemsInCart[index].qty == 1) {
          this.removeItem(index);
        } else {
          this.itemsInCart[index].qty -= 1;
        }
      }
    },
  },
};
</script>

<style>
.v-card.borderme {
  border: 2px solid #ff4b24 !important;
}
.col-12 {
  padding: 5px !important;
}
.v-btn.widthoutupercase {
  text-transform: none !important;
}
</style>
<style scoped>
.v-list-item {
  padding: 0 12px;
}
</style>
