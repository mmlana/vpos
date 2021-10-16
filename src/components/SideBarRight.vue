<template>
  <v-navigation-drawer app color="white" right width="290">
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
    <v-list subheader two-line class="mt-1">
      <v-list-item>
        <v-list-item-avatar rounded color="grey lighten-4">
          <v-img src="https://source.unsplash.com/100x100/?cappucino,cup"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-2">Cappucino</v-list-item-title>
          <v-list-item-subtitle>
            X1
            <v-btn plain color="#704232" small>
              Notes
              <v-icon right>mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="caption">Rp. 20,000</v-list-item-action>
      </v-list-item>
    </v-list>
    <v-list subheader two-line class="mt-1">
      <v-list-item>
        <v-list-item-avatar rounded color="grey lighten-4">
          <v-img src="https://source.unsplash.com/100x100/?chocolate,cup,hotchocolate"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-2">Hot Chocolate</v-list-item-title>
          <v-list-item-subtitle>
            X1
            <v-btn plain color="#704232" small>
              Notes
              <v-icon right>mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="caption">Rp. 18,000</v-list-item-action>
      </v-list-item>
    </v-list>
    <v-list subheader two-line class="mt-1">
      <v-list-item>
        <v-list-item-avatar rounded color="grey lighten-4">
          <v-img src="https://source.unsplash.com/100x100/?tarolatte,cup,taro"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-2">Taro Latte</v-list-item-title>
          <v-list-item-subtitle>
            X1
            <v-btn plain color="#704232" small>
              Notes
              <v-icon right>mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="caption">Rp. 18,000</v-list-item-action>
      </v-list-item>
    </v-list>
    <v-toolbar color="rgba(0,0,0,0)" flat> <strong>Subtotal</strong><v-spacer></v-spacer><strong>Rp. 56,000</strong> </v-toolbar>
    <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n6"> <span>Tax(10%)</span><v-spacer></v-spacer><span>Rp. 5,600</span> </v-toolbar>
    <v-divider class="mx-4"></v-divider>
    <v-toolbar color="rgba(0,0,0,0)" flat> <strong>Total</strong><v-spacer></v-spacer><strong>Rp. 61,600</strong> </v-toolbar>
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
                          <v-icon :color="active ? '#704232' : 'black'">
                            fas fa-money-bill-wave
                          </v-icon>
                        </div>
                        <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="mt-n2 caption">Cash</v-list-item-subtitle>
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
                          <v-icon :color="active ? '#704232' : 'black'">
                            fas fa-credit-card
                          </v-icon>
                        </div>
                        <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="mt-n2 caption">Debit Card</v-list-item-subtitle>
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
                          <v-icon :color="active ? '#704232' : 'black'">
                            fas fa-qrcode
                          </v-icon>
                        </div>
                        <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="mt-n2 caption">E-Wallet</v-list-item-subtitle>
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
      <v-btn color="#704232" block dark class="widthoutupercase">Print</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style>
.v-card.borderme {
  border: 2px solid #704232 !important;
}
.col-12 {
  padding: 5px !important;
}
.v-btn.widthoutupercase {
  text-transform: none !important;
}
</style>
