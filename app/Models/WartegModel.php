<?php 

    namespace App\Models;
    
    use CodeIgniter\Model;

    class WartegModel extends Model{
        protected $table = 'tb_menu';
        protected $primarykey = 'id_menu';
        protected $allowedFields = ['nama_menu','harga_menu','status'];
    }
?>