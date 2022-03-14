<?php
class ClassDB
{
    #Conexão ao banco
    private function conectDB()
    {
        try{
            return $con = new \PDO("mysql:host=localhost;dbname=gasolina_project","root","");
        }catch (PDOException $erro){
            return $erro->getMessage();
        }
    }

    #Verificar o login
    public function verifyLogin($email,$pass)
    {
        $sql = "select * from users where email=? and password=?";
        $b = $this->conectDB()->prepare($sql);
        $b->bindParam(1,$email,\PDO::PARAM_STR);
        $b->bindParam(2,$pass,\PDO::PARAM_STR);
        $b->execute();
        return($b->rowCount() > 0)?true:false;
    }
}
?>