function App() {
    return (
        <div className="container">
            <h1>Form Perokok</h1>
            <p>Form ini untuk mendata siapa yang perokok dan yang tidak perokok.</p>

            <form>
                <div>
                    <label htmlFor="nama">Siapa nama anda?</label>
                    <div>
                        <input type="text" name="nama" id="nama" />
                    </div>
                </div>
                <div>
                    <label htmlFor="umur">Berapa umur anda?</label>
                    <div>
                        <input type="text" name="umur" id="umur" />
                    </div>
                </div>
                <div>
                    <label>Apa jenis kelamin anda?</label>
                    <div>
                        <input type="radio" name="kelamin" id="L" value={"Laki-Laki"} />
                        <label htmlFor="L">Laki-Laki</label>
                        <input type="radio" name="kelamin" id="P" value={"Perempuan"} />
                        <label htmlFor="P">Perempuan</label>
                    </div>
                </div>
                <div>
                    <label>Apakah anda perokok?</label>
                    <div>
                        <input type="radio" name="radio" id="ya" value={"Ya"} /> <label htmlFor="ya">Ya</label>
                        <input type="radio" name="radio" id="tidak" value={"Tidak"} />
                        <label htmlFor="tidak">Tidak</label>
                    </div>
                </div>
                <div>
                    <label>Jika anda perokok, rokok apa yang pernah anda coba?</label>
                    <div>
                        <input type="checkbox" name="rokok" id="GGF" value={"Gudang Garam Filter"} />
                        <label htmlFor="GGF">Gudang Garam Filter</label>
                        <input type="checkbox" name="rokok" id="LS" value={"Lucky Strike"} />
                        <label htmlFor="LS">Lucky Strike</label>
                        <input type="checkbox" name="rokok" id="M" value={"Marlboro"} />
                        <label htmlFor="M">Marlboro</label>
                        <input type="checkbox" name="rokok" id="E" value={"Esse"} /> <label htmlFor="E">Esse</label>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Kirim" />
                    <input type="reset" value="Reset" />
                </div>
            </form>
        </div>
    );
}

export default App;
