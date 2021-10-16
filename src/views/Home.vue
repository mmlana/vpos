<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar />
    <SideBarRight />
    <v-container>
      <v-toolbar color="rgba(0,0,0,0)" flat>
        <v-toolbar-title class="mt-n3">Choose Category</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field label="Search category or menu" class="mt-5" color="brown" filled append-icon="mdi-magnify" dense solo flat background-color="grey lighten-4"></v-text-field>
      </v-toolbar>
      <v-item-group mandatory class="mt-n1">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' : 'borderout'" class="f-flex align-center rounded-lg mx-2" dark height="160" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img src="https://source.unsplash.com/200x200/?all-drink" max-height="110" max-width="110" contain></v-img>
                          </div>
                          <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="caption mt-4">All</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' : 'borderout'" class="f-flex align-center rounded-lg mx-2" dark height="160" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img src="https://source.unsplash.com/200x200/?coffe" max-height="110" max-width="110" contain></v-img>
                          </div>
                          <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="caption mt-4">Coffe</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' : 'borderout'" class="f-flex align-center rounded-lg mx-2" dark height="160" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img src="https://source.unsplash.com/200x200/?milk" max-height="110" max-width="110" contain></v-img>
                          </div>
                          <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="caption mt-4">Milk Based</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' : 'borderout'" class="f-flex align-center rounded-lg mx-2" dark height="160" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img src="https://source.unsplash.com/200x200/?juice" max-height="110" max-width="110" contain></v-img>
                          </div>
                          <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="caption mt-4">Juice</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' : 'borderout'" class="f-flex align-center rounded-lg mx-2" dark height="160" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img src="https://source.unsplash.com/200x200/?snack" max-height="110" max-width="110" contain></v-img>
                          </div>
                          <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="caption mt-4">Snack</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' : 'borderout'" class="f-flex align-center rounded-lg mx-2" dark height="160" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img src="https://source.unsplash.com/200x200/?dessert,food" max-height="110" max-width="110" contain></v-img>
                          </div>
                          <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="caption mt-4">Dessert</v-list-item-subtitle>
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
      <v-toolbar color="#EEEEEE" flat>
        <v-toolbar-title>Coffe Menu</v-toolbar-title>
        <v-spacer></v-spacer>
        <span color="grey">3 Coffees Results</span>
      </v-toolbar>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card flat class="rounded-lg mx-5">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img src="https://source.unsplash.com/200x200/?coffe-drink"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h5">
                  Cappucino
                </v-list-item-title>
                <v-list-item-subtitle class="mt-1">
                  Cappucino is espresso-based coffe prepared with steamed milk foam.
                </v-list-item-subtitle>
                <strong class="mt-3">
                  Rp. 20,000
                </strong>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-row>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">
                    Mood
                  </strong>
                  <br />
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <v-icon dark color="orange">fas fa-fire</v-icon>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <v-icon dark color="blue">fab fa-modx</v-icon>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-2">
                    Size
                  </strong>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center justify-center">
                                <strong class="font-weight-black">
                                  S
                                </strong>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" sm="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center justify-center">
                                <strong class="font-weight-black">
                                  M
                                </strong>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" sm="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center justify-center">
                                <strong class="font-weight-black">
                                  L
                                </strong>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-actions>
              <v-row>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">
                    Sugar Level
                  </strong>
                  <br />
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">30%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">50%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">70%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-2">
                    Ice Level
                  </strong>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">30%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">50%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">70%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-actions>
              <v-btn color="#704232" block dark class="widthoutupercase mb-2">Add Bill</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card flat class="rounded-lg mx-5">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img src="https://source.unsplash.com/200x200/?espresso-drink"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h5">
                  Espresso
                </v-list-item-title>
                <v-list-item-subtitle class="mt-1">
                  Espresso is a coffe in which a small amount of nearly boiling water (about 90 °C or 190 °F) is forced under 9–10 bars (900–1,000 kPa; 130–150 psi) of pressure (expressed) through
                  finely-ground coffee beans.
                </v-list-item-subtitle>
                <strong class="mt-3">
                  Rp. 20,000
                </strong>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-row>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">
                    Mood
                  </strong>
                  <br />
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <v-icon dark color="orange">fas fa-fire</v-icon>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <v-icon dark color="blue">fab fa-modx</v-icon>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-2">
                    Size
                  </strong>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center justify-center">
                                <strong class="font-weight-black">
                                  S
                                </strong>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" sm="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center justify-center">
                                <strong class="font-weight-black">
                                  M
                                </strong>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" sm="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center justify-center">
                                <strong class="font-weight-black">
                                  L
                                </strong>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-actions>
              <v-row>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">
                    Sugar Level
                  </strong>
                  <br />
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">30%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">50%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">70%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-2">
                    Ice Level
                  </strong>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">30%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">50%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">70%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-actions>
              <v-btn color="#704232" block dark class="widthoutupercase mb-2">Add Bill</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card flat class="rounded-lg mx-5">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img src="https://source.unsplash.com/200x200/?americano-drink"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h5">
                  Americano
                </v-list-item-title>
                <v-list-item-subtitle class="mt-1">
                  Americano is a coffee drink prepared by diluting an espresso with hot water.
                </v-list-item-subtitle>
                <strong class="mt-3">
                  Rp. 20,000
                </strong>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-row>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">
                    Mood
                  </strong>
                  <br />
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <v-icon dark color="orange">fas fa-fire</v-icon>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <v-icon dark color="blue">fab fa-modx</v-icon>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-2">
                    Size
                  </strong>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center justify-center">
                                <strong class="font-weight-black">
                                  S
                                </strong>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" sm="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center justify-center">
                                <strong class="font-weight-black">
                                  M
                                </strong>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" sm="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center justify-center">
                                <strong class="font-weight-black">
                                  L
                                </strong>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-actions>
              <v-row>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">
                    Sugar Level
                  </strong>
                  <br />
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">30%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">50%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">70%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-2">
                    Ice Level
                  </strong>
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">30%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">50%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle" dark height="50" width="50" @click="toggle" flat>
                              <v-list-item class="text-center pa-0">
                                <v-list-item-content>
                                  <strong class="overline" :class="active ? 'brown--text' : 'red--text'">70%</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-actions>
              <v-btn color="#704232" block dark class="widthoutupercase mb-2">Add Bill</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar.vue";
import SideBarRight from "@/components/SideBarRight.vue";

export default {
  name: "Home",
  components: {
    SideBar,
    SideBarRight,
  },
};
</script>
<style>
.v-card.borderme {
  border: 2px solid #704232 !important;
}
.v-card.borderout {
  border: 1px solid #bcaaa4 !important;
}
</style>
