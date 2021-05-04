// Kontrat

// TODO: Array'lerden 0'ları temizle

// Versiyon numarası
'reach 0.1';

const [isOutcome,Berabere, AdminKazandi, OyuncuKazandi] = makeEnum(3);
// Interface (arayüz) tanımlarımız
const winner = (hamlee) =>((hamlee>50 ? 1: 2));
const AdminInterface = {
    ucret: UInt,
    oyunuBitir: Fun([], Bool),
    transferiGor: Fun([],Null),
};

const OyuncuInterface = {
    hamleYap: Fun([], Array(UInt, 10)),
    hamleyiGor: Fun([Array(UInt, 10)], Null)
}

// Kontrat kodu
export const main = Reach.App(
    {},
    [
        Participant('Admin', AdminInterface),
        Participant('Oyuncu', OyuncuInterface)
    ],
    (Admin, Oyuncu) => {
        // Asıl mantık mekanizmamız
        // Admin başta fiyatı belirler
        Admin.only(() => {
            const ucret = declassify(interact.ucret);
        });
        Admin.publish(ucret).pay(ucret);
        commit();
        Oyuncu.pay(ucret);
        // Admin oyunu bitimini onaylamadığı sürece
        // Oyuncular hamle oynar ve ücretini öder
        //var oyunBitmeli = false;
        var kimKazandi = Berabere;
        invariant( isOutcome(kimKazandi));
        while (kimKazandi==Berabere) {
            commit();
            fork()
            .case(
                Admin,
                (() => ({
                    when: declassify(interact.oyunuBitir())
                })),
                () => {
                    //oyunBitmeli = true;
                    continue;
                }
            )
                .case(
                    Oyuncu,
                    (() => {
                        const hamle = declassify(interact.hamleYap());
                        return ({
                            when: hamle != 0,
                            msg: hamle
                        });
                    }),
                    //(hamle => ucret),
                    (hamle) => {
                        // Oyuncuların hamleyi görmesi, 
                        // ikincisi paranın admine verilmesi
                        Oyuncu.only(() => {
                            interact.hamleyiGor(hamle);
                        });
                        //transfer(ucret).to(Admin);
                        Admin.only(()=>{
                            interact.transferiGor();
                        });
                        
                       
                        kimKazandi = winner(hamle[0]);
                        continue;
                    }
                )
                .timeout(
                    1024, () => {
                        Admin.publish();
                        continue;
                    }
                );
        }
        transfer(balance()).to(kimKazandi == AdminKazandi ? Admin : Oyuncu);
        commit();
        exit();
    }
);