import "reflect-metadata";
import { createExpressServer, useContainer } from "routing-controllers";
import { CotaçãoController } from "./CotaçãoController";
import { Container, Service, Token } from "typedi";

import { BraspressAereo } from "./transportadoras/braspress/braspress-aereo";
import { BraspressRodoviário } from "./transportadoras/braspress/braspress-rodoviario";
import { CorreiosPac } from "./transportadoras/correios/correios-pac";
import { CorreiosSedex } from "./transportadoras/correios/correios-sedex";
import { JamefAereo } from "./transportadoras/jamef/jamef-aereo";
import { JamefRodoviário } from "./transportadoras/jamef/jamef-rodoviario";

useContainer(Container);

const app = createExpressServer({
  controllers: [CotaçãoController],
});

app.listen(process.env.PORT || 3001);
app.get("/", function (req, res) {
  res.send("Api running");
});

Container.import([
  BraspressAereo,
  BraspressRodoviário,
  CorreiosPac,
  CorreiosSedex,
  JamefAereo,
  JamefRodoviário,
]);
