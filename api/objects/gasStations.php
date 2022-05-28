<?php
/**
*
*/
class Gasstations {

    //Database connection and table name
    private $conn;
    private $table_name = "gasstations";

    //Object Properties
    public $id;
    public $cnpj;
    public $name;
    public $adress;
    public $longitude;
    public $latitude;
    public $createAt;

    //constructor with $db as Database Connection
    public function __construct($db) {
        $this->conn = $db;
    }

    //read products
    public function read() {
        //select query
        
        $query = "SELECT g.id as gas_station_id,f.id as fuel_id, g.name, g.cnpj, g.address, g.latitude,g.longitude,g.createdAt 
        FROM ".$this->table_name." g 
        LEFT JOIN fuel f ON f.idGasstation = g.id ORDER BY g.createdAt DESC";

        //prepare query statement
        $stmt = $this->conn->prepare($query);

        //execute query
        $stmt->execute();

        return $stmt;
    }

    //create product
    public function create() {
        $query = "INSERT INTO "
                .$this->table_name. "
                SET name=:name,cnpj=:cnpj, address=:address, latitude=:latitude,longitude=:longitude, createdAt=:createdAt";

        //prepare query
        $stmt = $this->conn->prepare($query);

        //sanitize
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->cnpj = htmlspecialchars(strip_tags($this->cnpj));
        $this->addres = htmlspecialchars(strip_tags($this->addres));
        $this->latitude = htmlspecialchars(strip_tags($this->latitude));
        $this->longitude = htmlspecialchars(strip_tags($this->longitude));
        $this->createdAt = htmlspecialchars(strip_tags($this->createdAt));
       


        //bind values
        $stmt->bindParam(":name",$this->name);
        $stmt->bindParam(":cnpj",$this->cnpj);
        $stmt->bindParam(":addres",$this->addres);
        $stmt->bindParam(":latitude",$this->latitude);
        $stmt->bindParam(":longitude",$this->longitude);
        $stmt->bindParam(":createdAt",$this->createdAt);
      

        //execute query
        if($stmt->execute()) {
            return true;
        } else {

            return false;
        }
    }

    //read one product at time
    public function readOne() {
        //query to read single record
        $query = "SELECT g.id as gas_station_id,f.id as fuel_id, g.name, g.cnpj, g.address, g.latitude,g.longitude,g.createdAt
               FROM ".$this->table_name." g 
            LEFT JOIN fuel f ON g.id= f.idGasstation WHERE g.id = 1 LIMIT 0,1";

        //prepare query statement
        $stmt = $this->conn->prepare($query);

        //bind id of product to be updated
        $stmt->bindParam(1, $this->id);

        //execute query
        $stmt->execute();

        //get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        //set values to object properties
        $this->name = $row['name'];
        $this->cnpj = $row['cnpj'];
        $this->addres = $row['addres'];
        $this->latitude = $row['latitude'];
        $this->longitude = $row['longitude'];
        $this->cratedAt = $row['cratedAt'];
    }

    //update product
    public function update() {
        //update query
        $query = "UPDATE
                    ".$this->table_name."
                SET
                    name=:name,cnpj=:cnpj, address=:address, latitude=:latitude,longitude=:longitude, createdAt=:createdAt
                WHERE
                    id=:id";

        //prepare query statement
        $stmt = $this->conn->prepare($query);

        //sanitizing
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->cnpj = htmlspecialchars(strip_tags($this->cnpj));
        $this->addres = htmlspecialchars(strip_tags($this->addres));
        $this->latitude = htmlspecialchars(strip_tags($this->latitude));
        $this->longitude = htmlspecialchars(strip_tags($this->longitude));
        $this->createdAt = htmlspecialchars(strip_tags($this->createdAt));

        //binding new values
        $stmt->bindParam(':name',$this->name);
        $stmt->bindParam(':cnpj',$this->cnpj);
        $stmt->bindParam(':addres',$this->addres);
        $stmt->bindParam(':latitude',$this->latitude);
        $stmt->bindParam(':longitude',$this->longitude);
        $stmt->bindParam(':createdAt',$this->createdAt);


        //execute query
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    //read products with pagination
    public function readPaging($from_record_num, $records_per_page) {

        //select query
        $query = "SELECT g.id as gas_station_id,f.id as fuel_id, g.name, g.cnpj, g.address, g.latitude,g.longitude,g.createdAt
        FROM ".$this->table_name." g 
                LEFT JOIN
                    fuel f
                        ON g.id = f.idGasstation
                ORDER BY g.createdAt DESC
                LIMIT ?, ?";

        //prepare query statement
        $stmt = $this->conn->prepare($query);

        //bind param values
        $stmt->bindParam(1, $from_record_num, PDO::PARAM_INT);
        $stmt->bindParam(2, $records_per_page, PDO::PARAM_INT);

        //execute query
        $stmt->execute();

        //return values from database
        return $stmt;
    }

    //used for paging products
    public function count() {
        $query = "SELECT COUNT(*) as total_rows FROM ".$this->table_name."";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        return $row['total_rows'];
    }

    //delete product
    public function delete() {
        //delete query
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";

        //prepare query
        $stmt = $this->conn->prepare($query);

        //sanitize
        $this->id = htmlspecialchars(strip_tags($this->id));

        //binding
        $stmt->bindParam(1,$this->id);

        //execute query
        if($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    //search product
    public function search($keywords) {
        //select all query
        $query = "SELECT g.id as gas_station_id,f.id as fuel_id, g.name, g.cnpj, g.address, g.latitude,g.longitude,g.createdAt
        FROM ".$this->table_name." g
                    LEFT JOIN fuel f ON g.id = f.idGasstation
                    WHERE g.name LIKE ? OR f.type LIKE ?
                    ORDER BY g.createdAt DESC";

        //prepare query statement'
        $stmt = $this->conn->prepare($query);

        //sanitize
        $keywords = htmlspecialchars(strip_tags($keywords));
        $keywords = "%{$keywords}%";

        //bind param
        $stmt->bindParam(1, $keywords);
        $stmt->bindParam(2, $keywords);
        $stmt->bindParam(3, $keywords);

        //execute query
        $stmt->execute();

        return $stmt;
    }
}

?>