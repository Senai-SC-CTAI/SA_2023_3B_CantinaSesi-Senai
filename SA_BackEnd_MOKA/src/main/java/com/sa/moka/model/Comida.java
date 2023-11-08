package com.sa.moka.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Comida {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cod_comida;
    private String name_comida;
    private String categoria_comida;
    private Double preco_comida;

}
